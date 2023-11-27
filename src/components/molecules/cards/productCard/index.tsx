import { Card, Typography } from "antd";

import { View } from "../../..";
import { Rate } from "../../../atoms/rate";
import { ButtonPrimary } from "../../../atoms/button/primary";

const ProductCard = () => {
  return (
    <Card className="relative w-full max-w-[450px] px-0  mx-auto">
      <View className=" justify-between w-full  h-[40px] ">
        <View className="items-center h-full gap-2">
          <View className="rounded-full bg-black h-[36px] w-[36px]">s</View>
          <Typography>mohammad</Typography>
        </View>
        <View className="gap-2 items-center">
          <ButtonPrimary>Edit</ButtonPrimary>
        </View>
      </View>
      <View className="w-full h-full  min-h-[450px] mx-0 bg-black ">image</View>
      <View vertical className=" w-full pt-2 px-1">
        <View className="bg-white" vertical>
          {" "}
          <View className="justify-between mb-2">
            <Typography className="text-black text-[14px] font-semibold">
              ProductName
            </Typography>
            <Typography className="text-black text-[12px] font-semibold">
              about this product
            </Typography>
          </View>
          <View className="justify-between">
            <Typography>price</Typography>
            <Rate className="w-[150px]" defaultValue={3} disabled />
          </View>
        </View>
      </View>
    </Card>
  );
};

export { ProductCard };
