import { Content } from "antd/es/layout/layout";
import { Sider } from "../../..";
import Header from "../../../atoms/header";
import Layout from "../../../atoms/layout";

import Footer from "../../../atoms/footer";

export interface MainDashProps {
  footer?: React.ReactNode;
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  rightBar?: React.ReactNode;
}

const MainDashLayout = ({
  footer,
  children,
  sidebar,
  header,
  rightBar,
}: MainDashProps) => {
  return (
    <Layout className="h-full min-h-[100vh]">
      <Sider className="h-full ">{sidebar}</Sider>
      <Layout>
        <Header className="bg-inherit w-full px-0">{header}</Header>
        <Content className="w-full flex-1">{children}</Content>
        <Footer className="w-full flex-1">{footer}</Footer>
      </Layout>
      <Sider className="h-full ">{rightBar}</Sider>
    </Layout>
  );
};

export { MainDashLayout };
