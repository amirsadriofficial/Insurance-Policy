import React from "react";
import BaseModal from "../base-modal";
import Button from "../button";
import { useRouter, useSearchParams } from "next/navigation";

function DeleteAddressModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const addressId = searchParams.get("id");
  const addresses = JSON.parse(localStorage.getItem("addresses") || "[]");
  const address = addresses.find(
    (addr: { id: string }) => addr?.id === addressId
  );
  const handleDelete = () => {
    const updatedAddresses = addresses.filter(
      (addr: { id: string }) => addr.id !== addressId
    );
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
    router.back();
  };

  return (
    <BaseModal title="حذف آدرس" toggleModal={() => undefined}>
      <div className="px-[12px] my-[10px]">
        <p className="font-semibold">آیا از حذف آدرس خود، مطمین هستید؟</p>
        <div className="bg-[#F2F2F2] mt-[16px] mb-[24px] p-2">
          <p className="font-semibold mb-[8px]">{address?.name}</p>
          <p className="text-[#757575] text-[12px]">{address?.details}</p>
        </div>
        <div className="flex gap-[12px]">
          <Button fullWidth onClick={handleDelete}>
            تایید
          </Button>
          <Button isOutlined fullWidth onClick={() => router.back()}>
            بازگشت
          </Button>
        </div>
      </div>
    </BaseModal>
  );
}

export default DeleteAddressModal;
