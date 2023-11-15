import React from "react";
import { Menu as AntdMenu, MenuProps } from "antd";
interface MyMenuProps extends MenuProps {
  children?: React.ReactNode;
  className?: string;
}
const Menu = ({ children, className, ...rest }: MyMenuProps) => {
  return (
    <AntdMenu className={`!border-none ${className}`} {...rest}>
      {children}
    </AntdMenu>
  );
};

export { Menu };
