"use client";

import CloseIcon from "@/assets/icons/close.svg";
import { useState } from "react";
import Button from "../button";
import BaseModal from "../base-modal";
import { useQuery } from "@tanstack/react-query";
import api from "@/services";
import { IAddress } from "./types";

interface IProps {
  toggleModal: () => void;
}

function ModalAddress({ toggleModal }: IProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [deletedIds, setDeletedIds] = useState<string[]>(
    JSON.parse(localStorage.getItem("deletedAddresses") || "[]")
  );
  const { data } = useQuery({
    queryKey: ["Addresses"],
    queryFn: api.getAddresses,
  });
  const filteredData = data?.data?.filter((item: IAddress) => !deletedIds.includes(item.id)) || [];
  const handleDelete = (id: string) => {
    const updatedDeletedIds = [...deletedIds, id];
    setDeletedIds(updatedDeletedIds);
    localStorage.setItem("deletedAddresses", JSON.stringify(updatedDeletedIds));
  };

  return (
    <BaseModal title="انتخاب آدرس" toggleModal={toggleModal}>
      <div className="p-4">
        <div className="flex flex-col space-y-4">
          {filteredData.map((item: IAddress) => (
            <div key={item.id} className="flex items-center justify-between">
              <div
                className="flex items-center gap-3"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedOption(item.id);
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
        <Button fullWidth>انتخاب</Button>
      </div>
    </BaseModal>
  );
}

export default ModalAddress;
