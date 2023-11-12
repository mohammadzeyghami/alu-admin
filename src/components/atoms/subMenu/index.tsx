import React from "react";
import { Menu, SubMenuProps } from "antd";
import { Text } from "..";
import { Link } from "react-router-dom";
import { useActivelocation } from "../../../scripts/useActiveLocation";

interface MySubMenuProps extends SubMenuProps {
  items: {
    link: string;
    title: string;
    Icon?: React.ReactNode;
  }[];
  keyName: string;
}

const SubMenu = ({ items, keyName, ...rest }: MySubMenuProps) => {
  const { SubMenu: AntdSubMenu } = Menu;
  const active = useActivelocation({ target: keyName });

  return (
    <AntdSubMenu
      {...rest}
      className="w-full !bg-white opacity-100"
      popupClassName="!bg-white"
    >
      {items?.map((item, index) => (
        <Menu.Item
          key={index}
          className={`${
            active
              ? "  border-r-4 border-primary-light w-full  !bg-primary-light  "
              : "hover:!bg-primary-superlight !bg-white "
          } `}
        >
          <Link to={item.link}>
            <Text>{item?.title}</Text>
            {item.Icon}
          </Link>
        </Menu.Item>
      ))}
    </AntdSubMenu>
  );
};

export { SubMenu };
