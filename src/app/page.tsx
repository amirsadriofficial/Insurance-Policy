import InsurancePolicyDetail from "@/components/insurance-policy-detail";
import TitleBar from "@/components/title-bar";

export default function Home() {
  return (
    <div>
      <TitleBar title="مشخصات بیمه نامه" />
      <InsurancePolicyDetail />
      <TitleBar title="مشخصات مالک خودرو" />
    </div>
  );
}
