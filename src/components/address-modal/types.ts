export interface IProps {
  selectedAddress: {
    addressId: string;
    addressTitle: string;
  }
  setSelectedAddress: ({
    addressId,
    addressTitle,
  }: {
    addressId: string;
    addressTitle: string;
  }) => void;
}
export interface IAddress {
  id: string;
  name: string;
  details: string;
}
