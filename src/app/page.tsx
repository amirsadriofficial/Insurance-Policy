import CarPlate from "@/components/car-plate";
import TitleBar from "@/components/title-bar";

export default function Home() {
  return (
    <div>
      <TitleBar title="مشخصات بیمه نامه" />
      <TitleBar title="مشخصات مالک خودرو" />
      <CarPlate />
    </div>
  );
}
