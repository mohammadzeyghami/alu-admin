import { View } from "../../..";
import Card from "../../../atoms/card";
import { ButtonPrimary } from "../../../atoms/button/primary";

const PostCard = () => {
  return (
    <Card className="relative w-full  mx-auto">
      <View className="absolute justify-between w-full px-[50px] h-[40px] ">
        <View>
          <ButtonPrimary>follow</ButtonPrimary>
        </View>
        <View>more</View>
      </View>
      <View className="w-full h-full ">image</View>
      <View className="bg-white" vertical>
        asd
      </View>
    </Card>
  );
};

export { PostCard };
