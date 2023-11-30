import { Text, View } from "../../..";
import { limitWords } from "../../../../scripts";
import Card from "../../../atoms/card";
// import { ButtonPrimary } from "../../../atoms/button/primary";
import { Typography } from "antd";
// import LikeIcon from "../../../../assets/Icons/LikeIcon";
// import CommentIcon from "../../../../assets/Icons/Comment";
// import TelegramIcon from "../../../../assets/Icons/TelegramIcon";

const PostCard = () => {
  const description = limitWords(
    "this is description and you can set a lot of things in here",
    10
  );
  return (
    <Card className="relative w-full max-w-[1080px] px-0  mx-auto">
      <View className=" justify-between w-full  h-[40px] ">
        <View className="items-center h-full gap-2 p-1">
          <div className="rounded-full bg-black h-[36px] w-[36px]"></div>
          <Typography>mohammad</Typography>
        </View>
        <View className="gap-2 items-center">
          <View className="mr-[12px] h-full items-center pb-1 cursor-pointer">
            ....
          </View>
        </View>
      </View>
      <Text className="text-3 font-semibold p-1">Title</Text>
      <View className="w-full h-full  min-h-[550px] mx-0 bg-black ">image</View>
      <View vertical className=" w-full pt-2 px-1">
        <View className="bg-white" vertical>
          <View className="flex justify-start gap-2 items-center">
            {/* <LikeIcon className={"cursor-pointer"} />
            <CommentIcon className={"cursor-pointer"} />
            <TelegramIcon className={"cursor-pointer"} /> */}
            <Text>{description}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export { PostCard };
