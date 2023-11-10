import { Menu } from "antd";
import { SiderCell, View } from "../../..";

import { useState } from "react";

const MainSidebar = () => {
  const [selectedKey, setSelectedKey] = useState("home"); // Initial selected key

  const handleMenuClick = (e) => {
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
        <SiderCell selectedKey={selectedKey} key="home" keyName="home">
          Home
        </SiderCell>
        <SiderCell selectedKey={selectedKey} key="user" keyName="user">
          User
        </SiderCell>
        <SiderCell selectedKey={selectedKey} key="settings" keyName="settings">
          Settings
        </SiderCell>
        <SiderCell selectedKey={selectedKey} key="charts" keyName="charts">
          Charts
        </SiderCell>
      </Menu>
    </View>
  );
};

export default MainSidebar;
