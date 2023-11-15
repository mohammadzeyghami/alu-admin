import { Menu } from "antd";
import { SiderCell, View } from "../../..";

import { useState } from "react";

import Routes from "../../../../routes";

const MainSidebar = () => {
  const [selectedKey, setSelectedKey] = useState("home"); // Initial selected key

  const handleMenuClick = (e: any) => {
    setSelectedKey(e?.key);
  };
  return (
    <View vertical className="h-full  items-center">
      <Menu
        onClick={handleMenuClick}
        selectedKeys={[selectedKey]}
        mode={"inline"}
        className=" py-4 w-full !border-none"
      >
        <View className="mb-8">portfolio</View>
        <SiderCell
          key="home"
          text="home"
          to={Routes.dashboard.root}
          keyName="dashboard"
          isWrapper
        />

        <SiderCell
          key="category"
          text="category"
          to={Routes.dashboard.categories.root}
          keyName="categories"
        />

        <SiderCell
          key="posts"
          keyName="posts"
          text="posts"
          to={Routes.dashboard.posts.root}
        />

        <SiderCell
          text="products"
          to={Routes.dashboard.products.root}
          key="products"
          keyName="products"
        />

        <SiderCell
          text="settings"
          to={Routes.dashboard.setting.root}
          key="setting"
          keyName="setting"
        />
      </Menu>
    </View>
  );
};

export default MainSidebar;
