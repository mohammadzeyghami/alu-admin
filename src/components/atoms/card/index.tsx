import React from "react";
import { Card as AntdCard, CardProps } from "antd";
interface MyCardProps extends CardProps {
  children: React.ReactNode;
}
const Card = ({ children, ...rest }: MyCardProps) => {
  return <AntdCard {...rest}>{children}</AntdCard>;
};

export default Card;
