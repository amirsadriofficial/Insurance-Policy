import React from "react";

function CarOwnerDetail() {
  return (
    <div className="px-[20px] pr-[8px]">
      <p className="mb-[6px]">لطفا اطلاعات شخصی مالک خودرو را وارد کنید:</p>
      <input
        type="number"
        className="w-full border border-1 border-[#B4B4B4] h-[48px] font-medium pr-[13px] placeholder-gray-600"
        placeholder="کدملی"
      />
      <p className="h-[28px]"></p>
      <input
        type="number"
        className="w-full border border-1 border-[#B4B4B4] h-[48px] font-medium pr-[13px] placeholder-gray-600"
        placeholder="شماره تلفن همراه"
      />
      <p className="h-[28px]"></p>
    </div>
  );
}

export default CarOwnerDetail;
