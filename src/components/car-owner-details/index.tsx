import React from "react";
import { IProps } from "./types";

function CarOwnerDetail({
  setNationalId,
  setPhoneNumber,
  nationalId,
  phoneNumber,
  errorHandler,
}: IProps) {
  return (
    <div className="px-[20px]">
      <p className="mb-[6px] font-medium">
        لطفا اطلاعات شخصی مالک خودرو را وارد کنید:
      </p>
      <input
        type="number"
        className={`w-full border border-1 border-[#B4B4B4] h-[48px] font-medium pr-[13px] placeholder-gray-600 ${
          errorHandler.nationalId && "border-[#E61F10]"
        }`}
        placeholder="کدملی"
        defaultValue={nationalId}
        onChange={(e) => setNationalId(e.target.value)}
      />
      <p className="h-[28px] text-[14px] text-[#E61F10]">
        {errorHandler.nationalId && "کدملی وارد شده معتبر نیست"}
      </p>
      <input
        type="number"
        className={`w-full border border-1 border-[#B4B4B4] h-[48px] font-medium pr-[13px] placeholder-gray-600 ${
          errorHandler.phoneNumber && "border-[#E61F10]"
        }`}
        placeholder="شماره تلفن همراه"
        defaultValue={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <p className="h-[28px] text-[14px] text-[#E61F10]">
        {errorHandler.phoneNumber && "شماره تلفن همراه معتبر نیست"}
      </p>
    </div>
  );
}

export default CarOwnerDetail;
