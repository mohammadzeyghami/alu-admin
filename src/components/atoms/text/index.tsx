import { Typography, TypographyProps } from "antd";
interface TextProps extends TypographyProps {
  children?: React.ReactNode;
}
const Text = ({ children, ...rest }: TextProps) => {
  const { Text } = Typography;
  return <Text {...rest}>{children}</Text>;
};

export { Text };
