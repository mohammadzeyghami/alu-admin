import { Menu, MenuItemProps } from "antd";
import React from "react";
import { useActivelocation } from "../../../scripts/useActiveLocation";

interface MySiderCell extends MenuItemProps {
  childern?: React.ReactNode;
  key: string;
  keyName: string;
}
const SiderCell = ({ children, keyName = "/home", ...rest }: MySiderCell) => {
  const active = useActivelocation({ target: keyName });

  const { Item } = Menu;

  return (
    <Item
      className={`${
        active
          ? "  border-r-4 border-primary-light w-full  hover:!bg-[white] "
          : "hover:!bg-[white] bg-[white] "
      } `}
      {...rest}
    >
      {children}
    </Item>
  );
};

export { SiderCell };
