"use client";

import ReactDOM from "react-dom";
import CloseIcon from "@/assets/icons/close.svg";
import { useState } from "react";
import Button from "../button";

interface IProps {
  toggleModal: () => void;
}

const items = [
  { id: "1", title: "Item 1", description: "Description for item 1" },
  { id: "2", title: "Item 2", description: "Description for item 2" },
  { id: "3", title: "Item 3", description: "Description for item 3" },
];

function ModalAddress({ toggleModal }: IProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const handleDelete = (id: string) => {
    console.log(`Deleted option: ${id}`);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-end"
            onClick={toggleModal}
          />
          <div className="bg-white w-full rounded-t-lg z-50 absolute bottom-0">
            <div className="flex justify-between p-4 border-b border-b-[#E0E0E0]">
              <p className="font-semibold">انتخاب آدرس</p>
              <CloseIcon onClick={toggleModal} />
            </div>
            <div className="p-4">
              <div className="flex flex-col space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between"
                  >
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
                          آدرس شماره یک
                        </label>
                        <p className="text-[12px] text-gray-600 mb-2">
                          آدرس شریعتی خیابان فلان و پلاک فلااااااااااااااااان
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
          </div>
        </>,
        document.body
      )}
    </>
  );
}

export default ModalAddress;
