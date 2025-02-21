export interface IProps {
  setNationalId: (value: string) => void;
  setPhoneNumber: (value: string) => void;
  nationalId: string;
  phoneNumber: string;
  errorHandler: {
    nationalId: boolean;
    phoneNumber: boolean;
    addressId: boolean;
  };
}
