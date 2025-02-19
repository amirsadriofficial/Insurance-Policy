import React from "react";
import BaseModal from "../base-modal";
import Button from "../button";

function DeleteAddressModal() {
  return (
    <BaseModal title="حذف آدرس" toggleModal={() => undefined}>
      <div className="px-[12px] my-[10px]">
        <p className="font-semibold">آیا از حذف آدرس خود، مطمین هستید؟</p>
        <div className="bg-[#F2F2F2] mt-[16px] mb-[24px] p-2">
          <p className="font-semibold mb-[8px]">آدرس شماره 2</p>
          <p className="text-[#757575] text-[12px]">
            فارس، شیراز، خیابان جمهوری، بالاتر از فلان، پلاک ۶، واحد ۲۳۴
          </p>
        </div>
        <div className="flex gap-[12px]">
          <Button fullWidth>تایید</Button>
          <Button isOutlined fullWidth>
            بازگشت
          </Button>
        </div>
      </div>
    </BaseModal>
  );
}

export default DeleteAddressModal;
