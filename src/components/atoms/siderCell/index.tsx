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
  isWrapper?: boolean;
}
const SiderCell = ({
  children,
  text,
  isWrapper,
  to,
  keyName = "/home",
  ...rest
}: MySiderCell) => {
  const active = useActivelocation({ target: keyName, isWrapper: isWrapper });

  const { Item } = Menu;

  return (
    <Item
      className={`${
        active
          ? "  border-r-4 border-primary-light w-full !bg-primary-light  "
          : "hover:!bg-primary-superlight !bg-white "
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
