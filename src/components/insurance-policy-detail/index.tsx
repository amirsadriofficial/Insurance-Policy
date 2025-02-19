import React from "react";
import CarPlate from "../car-plate";

function InsurancePolicyDetail() {
  const detailItems = [
    { title: "شرکت بیمه گر", keyword: "" },
    { title: "برند خودرو", keyword: "" },
    { title: "مدل خودرو", keyword: "" },
  ];
  return (
    <div className="flex flex-col items-center pb-[24px]">
      <CarPlate />
      <div className="w-full px-[36px] mt-[24px]">
        {detailItems.map((item) => (
          <div key={item.title} className="flex items-center w-full mb-[8px]">
            <p className="whitespace-nowrap text-[#808080] text-[14px]">
              {item.title}
            </p>
            <div className="w-full border border-dashed"></div>
            <p className="">پارسیان</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InsurancePolicyDetail;
