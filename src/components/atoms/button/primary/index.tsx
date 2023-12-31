import { Button, ButtonProps } from "antd";
interface MyButtonProps extends ButtonProps {
  children?: React.ReactNode;
}
const ButtonPrimary = ({ children, className, ...rest }: MyButtonProps) => {
  return (
    <Button {...rest} className={`h-8 ${className}`}>
      {children}
    </Button>
  );
};

export { ButtonPrimary };
