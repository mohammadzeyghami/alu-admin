import { View } from "../../..";
import Card from "../../../atoms/card";
import { ButtonPrimary } from "../../../atoms/button/primary";
import { Typography } from "antd";
import LikeIcon from "../../../../assets/Icons/LikeIcon";
import CommentIcon from "../../../../assets/Icons/Comment";
import TelegramIcon from "../../../../assets/Icons/TelegramIcon";

const PostCard = () => {
  return (
    <Card className="relative w-full max-w-[450px] px-0  mx-auto">
      <View className=" justify-between w-full  h-[40px] ">
        <View className="items-center h-full gap-2">
          <View className="rounded-full bg-black h-[36px] w-[36px]">s</View>
          <Typography>mohammad</Typography>
        </View>
        <View className="gap-2 items-center">
          <ButtonPrimary>follow</ButtonPrimary>
          <View className="mr-[12px] h-full items-center pb-1">....</View>
        </View>
      </View>
      <View className="w-full h-full  min-h-[450px] mx-0 bg-black ">image</View>
      <View vertical className=" w-full pt-2 px-1">
        <View className="bg-white" vertical>
          <View className="flex justify-start gap-2 items-center">
            <LikeIcon className={"cursor-pointer"} />
            <CommentIcon className={"cursor-pointer"} />
            <TelegramIcon className={"cursor-pointer"} />
          </View>
        </View>
      </View>
    </Card>
  );
};

export { PostCard };
