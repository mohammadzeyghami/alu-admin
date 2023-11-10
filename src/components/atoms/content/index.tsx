import React from "react";
import { Layout, LayoutProps } from "antd";
interface MyContentProps extends LayoutProps {
  children: React.ReactNode;
}
const Content = ({ children, ...rest }: MyContentProps) => {
  const { Content: AntdContent } = Layout;
  return <AntdContent {...rest}>{children}</AntdContent>;
};

export default Content;
