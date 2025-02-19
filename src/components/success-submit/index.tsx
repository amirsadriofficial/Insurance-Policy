import React from "react";
import Button from "../button";
import InsurancePolicyDetail from "../insurance-policy-detail";
import SuccessForm from "@/assets/icons/success-form.svg";

function SuccessSubmit() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <SuccessForm />
        <p className="font-semibold mt-[16px] mb-[32px]">
          ثبت اطلاعات شما، با <span className="text-[#34A862]">موفقیت</span>{" "}
          انجام شد.
        </p>
      </div>
      <InsurancePolicyDetail />
      <div className="absolute left-[18px] bottom-[12px]">
        <Button>بازگشت</Button>
      </div>
    </div>
  );
}

export default SuccessSubmit;
