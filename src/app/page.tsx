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
import useLocalStorageState from "@/hooks/useLocalStorageState";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [nationalId, setNationalId] = useLocalStorageState<string>("nationalId", "");
  const [phoneNumber, setPhoneNumber] = useLocalStorageState<string>("phoneNumber", "");
  const [selectedAddress, setSelectedAddress] = useLocalStorageState<{
    addressId: string;
    addressTitle: string;
  }>("selectedAddress", {
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
  const { mutate: submitOrder, status: submitOrderRequestStatus } = useMutation(
    {
      mutationFn: api.setOrder,
      onSuccess: () => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("modal", "success");
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
      },
      onError: () => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("modal", "error");
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
      },
    }
  );
  const { data } = useQuery({
    queryKey: ["Addresses"],
    queryFn: api.getAddresses,
  });
  useEffect(() => {
    if (data) {
      localStorage.removeItem("addresses");
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
      setErrorHandler({
        nationalId: false,
        phoneNumber: false,
        addressId: false,
      });
      submitOrder({
        nationalId,
        phoneNumber,
        addressId: selectedAddress.addressId,
      });
    }
  };
  const multiModalRenderer: {
    [key in "error" | "addresses" | "delete"]: React.ReactNode;
  } = {
    error: <RetrySubmitModal retrySubmitOrder={handleSubmitOrder} />,
    addresses: <ModalAddress setSelectedAddress={setSelectedAddress} selectedAddress={selectedAddress} />,
    delete: <DeleteAddressModal />,
  };

  return (
    <div>
      <TitleBar title="مشخصات بیمه نامه" />
      {searchParams.get("modal") === "success" ? (
        <SuccessSubmit />
      ) : (
        <>
          <InsurancePolicyDetail />
          <TitleBar title="مشخصات مالک خودرو" />
          <CarOwnerDetail
            setNationalId={setNationalId}
            setPhoneNumber={setPhoneNumber}
            nationalId={nationalId}
            phoneNumber={phoneNumber}
            errorHandler={errorHandler}
          />
          <RegistrationAddressDetail
            selectedAddress={selectedAddress}
            errorHandler={errorHandler}
          />
          <div className="absolute left-[18px] bottom-[12px]">
            <Button
              isDisabled={!nationalId || !phoneNumber}
              isLoading={submitOrderRequestStatus === "pending"}
              onClick={handleSubmitOrder}
            >
              تایید و ادامه
            </Button>
          </div>
          {
            multiModalRenderer[
              searchParams.get("modal") as "error" | "addresses" | "delete"
            ]
          }
        </>
      )}
    </div>
  );
}
