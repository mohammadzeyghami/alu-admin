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
    <Layout className="!h-[100vh] overflow-hidden">
      <Sider className="h-full !bg-white min-h-[100vh]  p-4 ">{sidebar}</Sider>
      <Layout>
        <Header className="bg-inherit w-[calc(100vw-360px)] mx-auto p-4 ">
          {" "}
          {header}
        </Header>
        <Content className="w-full flex-1 min-h-[calc(100vh-60px)]   overflow-y-auto">
          {children}
        </Content>
        <Footer className="w-full flex-1">{footer}</Footer>
      </Layout>
      <Sider className="h-full !bg-white min-h-[100vh] p-4">{rightBar}</Sider>
    </Layout>
  );
};

export { MainDashLayout };
