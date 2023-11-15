import React from "react";
import { Menu, MenuItemProps } from "antd";
interface MyMenuProps extends MenuItemProps {
  children?: React.ReactNode;
}
const MenuItemMain = ({ children, ...rest }: MyMenuProps) => {
  const { Item } = Menu;
  return <Item {...rest}>{children}</Item>;
};

export { MenuItemMain };
