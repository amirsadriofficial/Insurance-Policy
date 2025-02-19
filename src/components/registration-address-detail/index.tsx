"use client";
import React, { useState } from "react";
import ModalAddress from "../address-modal";

function RegistrationAddressDetail() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="px-[20px]">
      <p className="font-medium">آدرس جهت درج روی بیمه‌نامه</p>
      <p className="text-[14px] my-[6px]">
        لطفا آدرسی را که میخواهید روی بیمه نامه درج شود، وارد کنید.
      </p>
      <button
        className="bg-[#FFC453] w-full py-[12px] font-semibold"
        type="button"
        onClick={() => setIsOpenModal(true)}
      >
        انتخاب از آدرس های من
      </button>
      {isOpenModal && (
        <ModalAddress toggleModal={() => setIsOpenModal((prev) => !prev)} />
      )}
    </div>
  );
}

export default RegistrationAddressDetail;
