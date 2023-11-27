import { forwardRef, ForwardedRef } from "react";
import { Input as AntdInput } from "antd";
import { InputProps } from "antd";
import { Text, View } from "..";

interface MyInputProps extends InputProps {
  className?: string | undefined;
  label?: string;
  labelClassName?: string;
}

// تغییر در اینجا
const Input = forwardRef(
  (
    { className, label, labelClassName, ...rest }: MyInputProps,
    ref: ForwardedRef<any>
  ) => {
    return (
      <View vertical className="w-full">
        {label && (
          <Text className={`text-start ${labelClassName}`}>{label}</Text>
        )}
        <AntdInput
          {...rest}
          ref={ref}
          className={` hover:border-black focus:border-black ${className}`}
        />
      </View>
    );
  }
);

export { Input };
