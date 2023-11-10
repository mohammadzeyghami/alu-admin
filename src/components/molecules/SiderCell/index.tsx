import { Text, View } from "../..";
import { FlexProps, Typography } from "antd";
interface MySiderProps extends FlexProps {
  text?: string;
  Icon?: React.ReactNode;
}
const SiderCell = ({ text, Icon, ...rest }: Omit<MySiderProps, "children">) => {
  return (
    <View
      className="ps-6 w-full border-r-4 border-primary-main gap-2"
      {...rest}
    >
      <Text>{text}</Text>
      {Icon}
    </View>
  );
};

export default SiderCell;
