import { Menu, MenuItemProps } from "antd";
import React from "react";
interface MySiderCell extends MenuItemProps {
  childern?: React.ReactNode;
  selectedKey: string;
  key: string;
  keyName: string;
}
const SiderCell = ({
  children,
  selectedKey,
  keyName,
  ...rest
}: MySiderCell) => {
  const { Item } = Menu;
  console.log({ keyName });
  return (
    <Item
      className={`${
        selectedKey === keyName
          ? "  border-r-4 border-primary-light w-full hover:!bg-[white] "
          : "hover:!bg-[white] bg-[white] "
      } `}
      {...rest}
    >
      {children}
    </Item>
  );
};

export { SiderCell };
