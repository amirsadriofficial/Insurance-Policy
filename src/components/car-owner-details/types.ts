export interface IProps {
  setNationalId: (value: string) => void;
  setPhoneNumber: (value: string) => void;
  errorHandler: {
    nationalId: boolean;
    phoneNumber: boolean;
    addressId: boolean;
  };
}
