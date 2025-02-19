"use client";

import ReactDOM from "react-dom";
import CloseIcon from "@/assets/icons/close.svg";

interface IProps {
  toggleModal: () => void;
  title?: string;
  children?: React.ReactNode;
}

function BaseModal({ toggleModal, title, children }: IProps) {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-end"
            onClick={toggleModal}
          />
          <div className="bg-white w-full rounded-t-lg z-50 absolute bottom-0">
            {title && (
              <div className="flex justify-between p-4 border-b border-b-[#E0E0E0]">
                <p className="font-semibold">{title}</p>
                <CloseIcon onClick={toggleModal} />
              </div>
            )}
            {children}
          </div>
        </>,
        document.body
      )}
    </>
  );
}

export default BaseModal;
