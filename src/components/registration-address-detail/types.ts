export interface IProps {
  selectedAddress: {
    addressId: string;
    addressTitle: string;
  };
  errorHandler: {
    nationalId: boolean;
    phoneNumber: boolean;
    addressId: boolean;
  };
}
