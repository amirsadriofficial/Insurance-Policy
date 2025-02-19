import Button from "@/components/button";
import CarOwnerDetail from "@/components/car-owner-details";
import InsurancePolicyDetail from "@/components/insurance-policy-detail";
import RegistrationAddressDetail from "@/components/registration-address-detail";
import SuccessSubmit from "@/components/success-submit";
import TitleBar from "@/components/title-bar";

export default function Home() {
  return (
    <div>
      <TitleBar title="مشخصات بیمه نامه" />
      {/* TODO: handle condition for all submit steps */}
      {true ? (
        <>
          <InsurancePolicyDetail />
          <TitleBar title="مشخصات مالک خودرو" />
          <CarOwnerDetail />
          <RegistrationAddressDetail />
          <div className="absolute left-[18px] bottom-[12px]">
            <Button>تایید و ادامه</Button>
          </div>
        </>
      ) : (
        <SuccessSubmit />
      )}
    </div>
  );
}
