import { Menu } from "../../../atoms/menu";
import { Text, View } from "../../..";

import { useState } from "react";
import { MenuItemMain } from "../../../atoms/menuItem/main/Index";

const MainRightbar = () => {
  const [selectedKey, setSelectedKey] = useState("home"); // Initial selected key

  const handleMenuClick = (e: any) => {
    setSelectedKey(e?.key);
  };
  return (
    <View
      vertical
      className="h-full bg-white min-h-[calc(100vh-60px)] items-center pt-[24px]"
    >
      <Menu
        onClick={handleMenuClick}
        selectedKeys={[selectedKey]}
        mode={"inline"}
        className=" px-4 w-full"
      >
        <View vertical className="pb-4">
          <Text className="pb-6 text-[16px] font-semibold">Notification</Text>
          <MenuItemMain className="!px-0">sample</MenuItemMain>
          <MenuItemMain className="!px-0">sample</MenuItemMain>
          <MenuItemMain className="!px-0">sample</MenuItemMain>
          <MenuItemMain className="!px-0">sample</MenuItemMain>
          <MenuItemMain className="!px-0">sample</MenuItemMain>
        </View>
        <View vertical className="pb-4">
          <Text className="pb-6  text-[16px] font-semibold">Notification</Text>
          <MenuItemMain className="!px-0">sample</MenuItemMain>
          <MenuItemMain className="!px-0">sample</MenuItemMain>
          <MenuItemMain className="!px-0">sample</MenuItemMain>
          <MenuItemMain className="!px-0">sample</MenuItemMain>
          <MenuItemMain className="!px-0">sample</MenuItemMain>
        </View>
        <View vertical className="pb-4">
          <Text className="pb-6  text-[16px] font-semibold">Notification</Text>
          <MenuItemMain className="!px-0">sample</MenuItemMain>
          <MenuItemMain className="!px-0">sample</MenuItemMain>
          <MenuItemMain className="!px-0">sample</MenuItemMain>
          <MenuItemMain className="!px-0">sample</MenuItemMain>
          <MenuItemMain className="!px-0">sample</MenuItemMain>
        </View>
      </Menu>
    </View>
  );
};

export { MainRightbar };
