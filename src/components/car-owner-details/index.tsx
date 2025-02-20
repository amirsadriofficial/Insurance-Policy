import React from "react";

function CarOwnerDetail({
  setNationalId,
  setPhoneNumber,
  errorHandler,
}: {
  setNationalId: (value: string) => void;
  setPhoneNumber: (value: string) => void;
  errorHandler: {
    nationalId: boolean;
    phoneNumber: boolean;
    addressId: boolean;
  };
}) {
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
        onChange={(e) => setNationalId(e.target.value)}
      />
      <p className="h-[28px] text-[14px] text-[#E61F10]">
        {errorHandler.nationalId && "کدملی وارد شده معتبر نیست"}
      </p>
      <input
        type="number"
        className={`w-full border border-1 border-[#B4B4B4] h-[48px] font-medium pr-[13px] placeholder-gray-600 ${
          errorHandler.nationalId && "border-[#E61F10]"
        }`}
        placeholder="شماره تلفن همراه"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <p className="h-[28px] text-[14px] text-[#E61F10]">
        {errorHandler.phoneNumber && "شماره تلفن همراه معتبر نیست"}
      </p>
    </div>
  );
}

export default CarOwnerDetail;
