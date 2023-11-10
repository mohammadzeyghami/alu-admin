import { Content } from "antd/es/layout/layout";
import { Sider, View } from "../../..";
import Header from "../../../atoms/header";
import Layout from "../../../atoms/layout";

import Footer from "../../../atoms/footer";

interface MainDashProps {
  footer?: React.ReactNode;
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
}

const MainDash = ({ footer, children, sidebar, header }: MainDashProps) => {
  return (
    <Layout className="h-full min-h-[100vh]">
      <Header>{header}</Header>
      <Layout hasSider>
        <Sider className="h-full ">{sidebar}</Sider>
        <Content>{children}</Content>
        <Footer>{footer}</Footer>
      </Layout>
    </Layout>
  );
};

export { MainDash };
