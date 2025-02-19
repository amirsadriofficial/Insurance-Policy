import React from "react";
import IranFlag from "@/assets/icons/iran-flag.svg";

// interface IProps {
//   carNumber?: string;
// }

function CarPlate() {
  return (
    <div className="flex h-[50px] w-max rounded-[5px] border-2 border-[#000]">
      <p className="my-auto mx-[16px] font-semibold">60</p>
      <div className="inline-block h-full w-[2px] self-stretch bg-[#000]"></div>
      <div className="my-auto mx-[16px] flex gap-3 font-semibold">
        <p>988</p>
        <p>ک </p>
        <p>64</p>
      </div>
      <div className="inline-block h-full w-[2px] self-stretch bg-[#000]"></div>
      <div className="bg-[#1D48E1] pt-[6px] px-[9px]">
        <IranFlag />
        <p className="text-[#fff] font-semibold" dir="ltr">
          I.R.
        </p>
      </div>
    </div>
  );
}

export default CarPlate;
