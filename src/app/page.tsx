"use client";

import Button from "@/components/button";
import CarOwnerDetail from "@/components/car-owner-details";
import InsurancePolicyDetail from "@/components/insurance-policy-detail";
import RegistrationAddressDetail from "@/components/registration-address-detail";
import RetrySubmitModal from "@/components/retry-submit-modal";
import SuccessSubmit from "@/components/success-submit";
import TitleBar from "@/components/title-bar";
import api from "@/services";
import { validateNationalId, validatePhoneNumber } from "@/utils/helper";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
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
  const { isSuccess, isError, mutate: submitOrder } = useMutation({
    mutationFn: api.setOrder,
  });
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
      {isError && <RetrySubmitModal />}
    </div>
  );
}
