import { Layout, LayoutProps } from "antd";
const { Footer: AntdFooter } = Layout;
interface MyFooterProps extends LayoutProps {
  children: React.ReactNode;
}
const Footer = ({ children, ...rest }: MyFooterProps) => {
  return <AntdFooter {...rest}>{children}</AntdFooter>;
};

export default Footer;
