import { Menu, MenuItemProps } from "antd";
import React from "react";
import { useActivelocation } from "../../../scripts/useActiveLocation";
import { Link } from "react-router-dom";
import { Text } from "..";

interface MySiderCell extends MenuItemProps {
  childern?: React.ReactNode;
  key: string;
  keyName: string;
  text: string;
  to: string;
}
const SiderCell = ({
  children,
  text,
  to,
  keyName = "/home",
  ...rest
}: MySiderCell) => {
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
      <Link to={to}>
        <Text className="text-black">{text}</Text>
      </Link>
    </Item>
  );
};

export { SiderCell };
