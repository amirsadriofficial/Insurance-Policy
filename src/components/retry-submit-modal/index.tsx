import React from "react";
import BaseModal from "../base-modal";
import Button from "../button";
import { useRouter } from "next/navigation";

function RetrySubmitModal({
  retrySubmitOrder,
}: {
  retrySubmitOrder: () => void;
}) {
  const router = useRouter();

  return (
    <BaseModal toggleModal={() => undefined}>
      <div className="px-[12px] my-[10px]">
        <p className="font-semibold text-[14px] my-[8px]">
          متاسفانه در ثبت اطلاعات شما، خطایی رخ داده است.
        </p>
        <p className="font-semibold text-[14px] mb-[16px]">مجددا، تلاش کنید.</p>
        <div className="flex gap-[12px]">
          <Button fullWidth onClick={retrySubmitOrder}>
            تلاش مجدد
          </Button>
          <Button isOutlined fullWidth onClick={() => router.back()}>
            بازگشت
          </Button>
        </div>
      </div>
    </BaseModal>
  );
}

export default RetrySubmitModal;
