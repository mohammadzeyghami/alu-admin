import React from "react";
import { Layout, LayoutProps } from "antd";

interface MyLayoutProps extends LayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}
const Sider = ({ children, ...rest }: MyLayoutProps) => {
  const { Sider } = Layout;
  return <Sider {...rest}>{children}</Sider>;
};

export { Sider };
