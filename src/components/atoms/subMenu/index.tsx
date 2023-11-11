import React from "react";
import { Menu, SubMenuProps } from "antd";
import { Text } from "..";
import { Link } from "react-router-dom";

interface MySubMenuProps extends SubMenuProps {
  items: {
    link: string;
    title: string;
    Icon: React.ReactNode;
  }[]; // Use lowercase for the property name
}

const SubMenu = ({ items, ...rest }: MySubMenuProps) => {
  const { SubMenu: AntdSubMenu } = Menu;

  return (
    <AntdSubMenu {...rest} className="w-full">
      {items?.map((item, index) => (
        <Menu.Item key={index}>
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
