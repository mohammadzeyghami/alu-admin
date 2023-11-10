import { Typography } from "antd";
interface TextProps {
  children?: React.ReactNode;
}
const Text = ({ children, ...rest }: TextProps) => {
  const { Text } = Typography;
  return <Text {...rest}>{children}</Text>;
};

export { Text };
