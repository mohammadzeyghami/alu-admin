import { Menu } from "antd";
import { SiderCell, Text, View } from "../../..";

import { useState } from "react";

import { Link } from "react-router-dom";
import Routes from "../../../../routes";

const MainSidebar = () => {
  const [selectedKey, setSelectedKey] = useState("home"); // Initial selected key

  const handleMenuClick = (e: any) => {
    setSelectedKey(e?.key);
  };
  return (
    <View
      vertical
      className="h-full bg-white min-h-[calc(100vh-66px)] items-center pt-[24px]"
    >
      <Menu
        onClick={handleMenuClick}
        selectedKeys={[selectedKey]}
        mode="vertical"
        className="w-full"
      >
        <SiderCell key="home" keyName="home">
          <Link to={Routes.overview.root}>
            <Text className="text-black">Home</Text>
          </Link>
        </SiderCell>
        <SiderCell key="user" keyName="user">
          <Link to={Routes.posts.root}>
            <Text className="text-black">Charts</Text>
          </Link>
        </SiderCell>
        <SiderCell key="settings" keyName="settings">
          <Link to={Routes.categories.root}>
            <Text className="text-black">Setting</Text>
          </Link>
        </SiderCell>
        <SiderCell key="charts" keyName="charts">
          <Link to={Routes.products.root}>
            {" "}
            <Text className="text-black">LogOut</Text>
          </Link>
        </SiderCell>
        <SiderCell key="charts" keyName="charts">
          <Link to={Routes.setting.root}>
            {" "}
            <Text className="text-black">LogOut</Text>
          </Link>
        </SiderCell>
      </Menu>
    </View>
  );
};

export default MainSidebar;
