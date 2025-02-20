import CarIcon from "@/assets/icons/car.svg";
import { IProps } from "./types";

function TitleBar({ title }: IProps) {
  return (
    <div className="w-full flex gap-2 py-[12px] px-[8px] title-bar-shadow mb-[24px]">
      <div className="bg-[#FFC453] p-[6px] rounded-[5px]">
        <CarIcon />
      </div>
      <p className="font-medium text-[18px] leading-[28.13px]">{title}</p>
    </div>
  );
}

export default TitleBar;
