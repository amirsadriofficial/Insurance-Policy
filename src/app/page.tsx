"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import ModalAddress from "@/components/address-modal";
import CarOwnerDetail from "@/components/car-owner-details";
import InsurancePolicyDetail from "@/components/insurance-policy-detail";
import RegistrationAddressDetail from "@/components/registration-address-detail";
import RetrySubmitModal from "@/components/retry-submit-modal";
import SuccessSubmit from "@/components/success-submit";
import TitleBar from "@/components/title-bar";
import Button from "@/components/button";
import DeleteAddressModal from "@/components/delete-address-modal";
import useLocalStorageState from "@/hooks/useLocalStorageState";
import { validateNationalId, validatePhoneNumber } from "@/utils/helper";
import { IErrorHandler, IMultiModalRenderer, ISelectedAddress } from "./types";
import api from "@/services";

function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [nationalId, setNationalId] = useLocalStorageState<string>(
    "nationalId",
    ""
  );
  const [phoneNumber, setPhoneNumber] = useLocalStorageState<string>(
    "phoneNumber",
    ""
  );
  const [selectedAddress, setSelectedAddress] =
    useLocalStorageState<ISelectedAddress>("selectedAddress", {
      addressId: "",
      addressTitle: "",
    });
  const [errorHandler, setErrorHandler] = useState<IErrorHandler>({
    nationalId: false,
    phoneNumber: false,
    addressId: false,
  });
  // DESC: Send order completion
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
  // DESC: Get Address list
  const { data: addresses } = useQuery({
    queryKey: ["Addresses"],
    queryFn: api.getAddresses,
  });
  // DESC: set Addresses and clear stale addresses before set new data
  useEffect(() => {
    if (addresses) {
      localStorage.removeItem("addresses");
      localStorage.setItem("addresses", JSON.stringify(addresses?.data));
    }
  }, [addresses]);
  // DESC: OnCLick function on submit order button
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
  // DESC: Render suitable modal based on url query
  const multiModalRenderer: IMultiModalRenderer = {
    error: (
      <RetrySubmitModal
        retrySubmitOrder={handleSubmitOrder}
        isLoading={submitOrderRequestStatus === "pending"}
      />
    ),
    addresses: (
      <ModalAddress
        setSelectedAddress={setSelectedAddress}
        selectedAddress={selectedAddress}
      />
    ),
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

export default Home;
