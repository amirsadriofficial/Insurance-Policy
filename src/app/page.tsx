import CarOwnerDetail from "@/components/car-owner-details";
import InsurancePolicyDetail from "@/components/insurance-policy-detail";
import RegistrationAddressDetail from "@/components/registration-address-detail";
import TitleBar from "@/components/title-bar";

export default function Home() {
  return (
    <div>
      <TitleBar title="مشخصات بیمه نامه" />
      <InsurancePolicyDetail />
      <TitleBar title="مشخصات مالک خودرو" />
      <CarOwnerDetail />
      <RegistrationAddressDetail />
    </div>
  );
}
