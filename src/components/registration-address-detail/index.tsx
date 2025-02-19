import React from "react";

function RegistrationAddressDetail() {
  return (
    <div className="px-[20px]">
      <p className="font-medium">آدرس جهت درج روی بیمه‌نامه</p>
      <p className="text-[14px] my-[6px]">
        لطفا آدرسی را که میخواهید روی بیمه نامه درج شود، وارد کنید.
      </p>
      <button
        className="bg-[#FFC453] w-full py-[12px] font-semibold"
        type="button"
      >
        انتخاب از آدرس های من
      </button>
    </div>
  );
}

export default RegistrationAddressDetail;
