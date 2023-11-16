import { View } from "..";
import { FlexProps } from "antd";
const PageWrapper = ({ children }: FlexProps) => {
  return (
    <View
      vertical
      className="w-full max-w-[1200px]  p-6 pt-[40px] mx-auto min-h-[calc(100vh-200px)]"
    >
      {children}
    </View>
  );
};

export { PageWrapper };
