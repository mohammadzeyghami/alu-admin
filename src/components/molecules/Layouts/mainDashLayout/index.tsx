import { Content } from "antd/es/layout/layout";
import { Sider } from "../../..";
import Header from "../../../atoms/header";
import Layout from "../../../atoms/layout";
import React, { Suspense } from "react";
import Footer from "../../../atoms/footer";
import { Loading } from "../../../atoms/loading/loading";

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
    <Layout>
      <Sider className="!bg-white min-h-[100vh] fixed p-4 z-10 ">
        {sidebar}
      </Sider>
      <Layout>
        <Header className="bg-inherit w-[calc(100vw-360px)] fixed z-10 mx-auto p-4 ">
          {" "}
          {header}
        </Header>
        <Content className="w-full flex-1 min-h-[calc(100vh-120px)] mt-[60px] ">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Content>
        <Footer className="w-full flex-1">{footer}</Footer>
      </Layout>
      <Sider className=" !bg-white min-h-[100vh] fixed p-4 z-10">
        {rightBar}
      </Sider>
    </Layout>
  );
};

export { MainDashLayout };
