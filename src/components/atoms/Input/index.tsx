import { Input as AntdInput } from "antd";
import { InputProps } from "antd";
import { Text, View } from "..";
interface MyInputProps extends InputProps {
  className?: string | undefined;
  label?: string;
  labelClassName?: string;
}

const Input = ({ className, label, labelClassName, ...rest }: MyInputProps) => {
  return (
    <View vertical className="w-full">
      {label && <Text className={`text-start ${labelClassName}`}>{label}</Text>}
      <AntdInput
        {...rest}
        className={` hover:border-black focus:border-black ${className}`}
      />
    </View>
  );
};

export { Input };
