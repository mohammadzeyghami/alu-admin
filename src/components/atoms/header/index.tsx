import React from "react";
import { Layout, LayoutProps } from "antd";
interface MyHeaderProps extends LayoutProps {
  children: React.ReactNode;
}
const Header = ({ children, ...rest }: MyHeaderProps) => {
  const { Header } = Layout;
  return <Header {...rest}>{children}</Header>;
};

export default Header;
