import React from "react";
import { Menu, MenuItemProps } from "antd";
interface MyMenuProps extends MenuItemProps {
  children?: React.ReactNode;
}
const MenuItemNotification = ({ children, ...rest }: MyMenuProps) => {
  const { Item } = Menu;
  return <Item {...rest}>{children}</Item>;
};

export { MenuItemNotification };
