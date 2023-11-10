import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./routes";
import { Dashboard } from "./components/pages";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import Header from "./components/atoms/header";
import { Sider, View } from "./components";
import SiderCell from "./components/molecules/SiderCell";

function App() {
  const router = createBrowserRouter([
    {
      path: Routes.dashboard.root,
      element: (
        <Layout className="h-full min-h-[100vh]">
          <Header className="bg-white flex justify-center h-[76px] border-b-[1px] border-gray-light">
            this is Header
          </Header>
          <Layout hasSider>
            <Sider className="h-full min-h-[calc(100vh-76px)]">
              <View vertical className="h-full">
                <SiderCell />
                <View>sad</View>
              </View>
            </Sider>
            <Content>
              <Dashboard />
            </Content>
          </Layout>
        </Layout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
