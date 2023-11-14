import { Input as AntdInput } from "antd";
import { InputProps } from "antd";
interface MyInputProps extends InputProps {
  className?: string | undefined;
}

const Input = ({ className, ...rest }: MyInputProps) => {
  return (
    <AntdInput
      {...rest}
      className={` hover:border-black focus:border-black ${className}`}
    />
  );
};

export { Input };
