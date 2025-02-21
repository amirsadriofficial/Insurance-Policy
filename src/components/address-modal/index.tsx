"use client";

import CloseIcon from "@/assets/icons/close.svg";
import Button from "../button";
import BaseModal from "../base-modal";
import { IAddress, IProps } from "./types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function ModalAddress({ setSelectedAddress, selectedAddress }: IProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  // DESC: OnClick function on open delete modal
  const handleDelete = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("modal", "delete");
    params.set("id", id);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };
  const addresses = JSON.parse(
    localStorage.getItem("addresses") || "[]"
  ) as IAddress[];

  return (
    <BaseModal title="انتخاب آدرس">
      <div className="p-4">
        <div className="flex flex-col space-y-4">
          {addresses?.length > 0 ? (
            addresses?.map((item: IAddress) => (
              <div key={item.id} className="flex items-center justify-between">
                <div
                  className="flex items-center gap-3"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedAddress({
                      addressId: item.id,
                      addressTitle: item.details,
                    });
                  }}
                >
                  <input
                    type="radio"
                    id={item.id}
                    name="radioGroup"
                    value={item.id}
                    checked={item.id === selectedAddress.addressId}
                    onChange={(e) => {
                      e.stopPropagation();
                      setSelectedAddress({
                        addressId: item.id,
                        addressTitle: item.details,
                      });
                    }}
                    className="mb-2"
                  />
                  <div>
                    <label htmlFor={item.id} className="font-semibold">
                      {item.name}
                    </label>
                    <p className="text-[12px] text-gray-600 mb-2">
                      {item.details}
                    </p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(item.id);
                  }}
                  className="[&_path]:fill-[#dd7272]"
                >
                  <CloseIcon />
                </button>
              </div>
            ))
          ) : (
            <p className="text-center">موردی برای نمایش وجود ندارد</p>
          )}
        </div>
      </div>
      <div className="p-[10px]">
        <Button
          fullWidth
          onClick={() => router.back()}
          isDisabled={!selectedAddress.addressId}
        >
          انتخاب
        </Button>
      </div>
    </BaseModal>
  );
}

export default ModalAddress;
