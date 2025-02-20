import React from "react";
import SpinnerIcon from "@/assets/icons/loading.svg";

interface ButtonProps {
  isLoading?: boolean;
  isDisabled?: boolean;
  isOutlined?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  isLoading = false,
  isDisabled = false,
  isOutlined = false,
  fullWidth = false,
  onClick,
  children,
}) => {
  // DESC: Define base styles
  const baseStyles = `px-4 py-[12px] focus:outline-none border-2 flex justify-center gap-2 min-w-[140px] font-medium ${
    fullWidth && "w-full"
  }`;
  // DESC: Helper function to get active styles based on outlined state
  const getActiveStyles = () => {
    if (isOutlined) {
      return {
        base: "text-[#000] border border-[#000]",
        loading: "border-[#797979] text-[#797979] cursor-wait",
        disabled: "border-[#797979] text-[#797979]",
      };
    }
    return {
      base: "bg-[#000] text-white border border-[#000]",
      loading: "bg-[#ACACAC] text-[#525252] cursor-wait border-[#ACACAC]",
      disabled: "bg-[#DAD8D8] text-[#858484] border-[#DAD8D8]",
    };
  };
  // DESC: Get suitable styles
  const { base, loading, disabled } = getActiveStyles();
  // DESC: Combine all classes based on button state
  const buttonClassNames = `${baseStyles} ${isLoading ? loading : base} ${
    isDisabled ? disabled : ""
  }`;

  return (
    <button
      onClick={onClick}
      disabled={isDisabled || isLoading}
      className={buttonClassNames}
    >
      {isLoading ? (
        <div className="animate-spin">
          <SpinnerIcon />
        </div>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
