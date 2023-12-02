import React from "react";
import { Card as AntdCard, CardProps } from "antd";
interface MyCardProps extends CardProps {
  children: React.ReactNode;
  className?: string;
}
const Card = ({ children, className, ...rest }: MyCardProps) => {
  return (
    <AntdCard className={`p-2 shadow-md  ${className}`} {...rest}>
      {children}
    </AntdCard>
  );
};

export default Card;
