"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IProps } from "./types";

function RegistrationAddressDetail({ selectedAddress, errorHandler }: IProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const handleOpenModal = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("modal", "addresses");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="px-[20px]">
      <p className="font-medium">آدرس جهت درج روی بیمه‌نامه</p>
      {selectedAddress.addressId ? (
        <p className="text-[14px] my-[6px]">{selectedAddress.addressTitle}</p>
      ) : (
        <>
          <p
            className={`text-[14px] my-[6px] ${
              errorHandler.addressId && "text-[#E61F10]"
            }`}
          >
            لطفا آدرسی را که میخواهید روی بیمه نامه درج شود، وارد کنید.
          </p>
          <button
            className="bg-[#FFC453] w-full py-[12px] font-semibold"
            type="button"
            onClick={handleOpenModal}
          >
            انتخاب از آدرس های من
          </button>
        </>
      )}
    </div>
  );
}

export default RegistrationAddressDetail;
