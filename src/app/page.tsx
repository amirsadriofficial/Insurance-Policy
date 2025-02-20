"use client";

import ModalAddress from "@/components/address-modal";
import Button from "@/components/button";
import CarOwnerDetail from "@/components/car-owner-details";
import InsurancePolicyDetail from "@/components/insurance-policy-detail";
import RegistrationAddressDetail from "@/components/registration-address-detail";
import RetrySubmitModal from "@/components/retry-submit-modal";
import SuccessSubmit from "@/components/success-submit";
import TitleBar from "@/components/title-bar";
import api from "@/services";
import { validateNationalId, validatePhoneNumber } from "@/utils/helper";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import DeleteAddressModal from "@/components/delete-address-modal";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [nationalId, setNationalId] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [selectedAddress, setSelectedAddress] = useState<{
    addressId: string;
    addressTitle: string;
  }>({
    addressId: "",
    addressTitle: "",
  });
  const [errorHandler, setErrorHandler] = useState<{
    nationalId: boolean;
    phoneNumber: boolean;
    addressId: boolean;
  }>({
    nationalId: false,
    phoneNumber: false,
    addressId: false,
  });
  const { isSuccess, mutate: submitOrder } = useMutation({
    mutationFn: api.setOrder,
    onError: () => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("modal", "error");
      router.push(`${pathname}?${params.toString()}`, { scroll: false });
    },
  });
  const { data } = useQuery({
    queryKey: ["Addresses"],
    queryFn: api.getAddresses,
  });
  useEffect(() => {
    if (data) {
      localStorage.setItem("addresses", JSON.stringify(data?.data));
    }
  }, [data]);
  const handleSubmitOrder = () => {
    if (
      !validateNationalId(nationalId) ||
      !validatePhoneNumber(phoneNumber) ||
      !selectedAddress.addressId
    ) {
      setErrorHandler({
        nationalId: !validateNationalId(nationalId),
        phoneNumber: !validatePhoneNumber(phoneNumber),
        addressId: !selectedAddress.addressId,
      });
    } else {
      submitOrder({
        nationalId,
        phoneNumber,
        addressId: selectedAddress.addressId,
      });
    }
  };

  return (
    <div>
      <TitleBar title="مشخصات بیمه نامه" />
      {!isSuccess ? (
        <>
          <InsurancePolicyDetail />
          <TitleBar title="مشخصات مالک خودرو" />
          <CarOwnerDetail
            setNationalId={setNationalId}
            setPhoneNumber={setPhoneNumber}
            errorHandler={errorHandler}
          />
          <RegistrationAddressDetail
            setSelectedAddress={setSelectedAddress}
            selectedAddress={selectedAddress}
            errorHandler={errorHandler}
          />
          <div className="absolute left-[18px] bottom-[12px]">
            <Button
              isDisabled={!nationalId || !phoneNumber}
              onClick={handleSubmitOrder}
            >
              تایید و ادامه
            </Button>
          </div>
        </>
      ) : (
        <SuccessSubmit />
      )}
      {searchParams.get("modal") === "error" && (
        <RetrySubmitModal retrySubmitOrder={handleSubmitOrder} />
      )}
      {searchParams.get("modal") === "addresses" && (
        <ModalAddress setSelectedAddress={setSelectedAddress} />
      )}
      {searchParams.get("modal") === "delete" && <DeleteAddressModal />}
    </div>
  );
}
