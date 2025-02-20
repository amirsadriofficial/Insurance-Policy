"use client";

import CloseIcon from "@/assets/icons/close.svg";
import { useState } from "react";
import Button from "../button";
import BaseModal from "../base-modal";
import { IAddress } from "./types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IProps {
  setSelectedAddress: ({
    addressId,
    addressTitle,
  }: {
    addressId: string;
    addressTitle: string;
  }) => void;
}

function ModalAddress({ setSelectedAddress }: IProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
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
    <BaseModal title="انتخاب آدرس" toggleModal={() => undefined}>
      <div className="p-4">
        <div className="flex flex-col space-y-4">
          {addresses?.map((item: IAddress) => (
            <div key={item.id} className="flex items-center justify-between">
              <div
                className="flex items-center gap-3"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedOption(item.id);
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
                  checked={selectedOption === item.id}
                  onChange={(e) => {
                    e.stopPropagation();
                    setSelectedOption(item.id);
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
          ))}
        </div>
      </div>
      <div className="p-[10px]">
        <Button fullWidth onClick={() => router.back()}>
          انتخاب
        </Button>
      </div>
    </BaseModal>
  );
}

export default ModalAddress;
