export interface IProps {
  isLoading?: boolean;
  isDisabled?: boolean;
  isOutlined?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}