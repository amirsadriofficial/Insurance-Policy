export interface IProps {
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
