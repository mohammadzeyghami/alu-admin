import React from "react";
import { Layout as LayoutAntd, LayoutProps } from "antd";
interface MyLayoutProps extends LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children, ...rest }: MyLayoutProps) => {
  return <LayoutAntd {...rest}>{children}</LayoutAntd>;
};

export default Layout;
