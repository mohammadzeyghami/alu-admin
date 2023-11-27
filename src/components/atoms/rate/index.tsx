import { Rate as AntdRate, RateProps } from "antd";

const Rate = ({ ...rest }: RateProps) => {
  return <AntdRate {...rest} />;
};

export { Rate };
