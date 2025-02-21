export interface IMultiModalRenderer {
  error: React.ReactNode;
  addresses: React.ReactNode;
  delete: React.ReactNode;
}
export interface ISelectedAddress {
  addressId: string;
  addressTitle: string;
}
export interface IErrorHandler {
  nationalId: boolean;
  phoneNumber: boolean;
  addressId: boolean;
}
