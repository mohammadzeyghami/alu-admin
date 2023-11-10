import React from "react";
import { Flex as FlexAntd, FlexProps } from "antd";
interface MyFlexProps extends FlexProps {
  children: React.ReactNode;
}
const View = ({ children, ...rest }: MyFlexProps) => {
  return <FlexAntd {...rest}>{children}</FlexAntd>;
};

export { View };
