import { PageWrapper, View } from "../../../..";
import Card from "../../../../atoms/card";
import CardsWrapper from "../../../../teamplates/CardsWrapper";
export interface MyCardsWrapper {
  Right?: string | React.ReactNode;
  LeftBody?: string | React.ReactNode;
  LeftHeader?: string | React.ReactNode;
  className?: string;
}
const Items: MyCardsWrapper[] = [
  {
    Right: "RightHeader",
    LeftHeader: "RightBody",
    LeftBody: "LeftBody",
    className: "className",
  },
  {
    Right: "RightHeader",
    LeftHeader: "RightBody",
    LeftBody: "LeftBody",
    className: "className",
  },
  {
    Right: "RightHeader",
    LeftHeader: "RightBody",
    LeftBody: "LeftBody",
    className: "className",
  },
  {
    Right: "RightHeader",
    LeftHeader: "RightBody",
    LeftBody: "LeftBody",
    className: "className",
  },
];
const MainProducts = () => {
  return (
    <PageWrapper vertical className="overflow-y-auto">
      <CardsWrapper items={Items} />
      <View className="w-full gap-6 mt-6 ">
        <Card className="max-w-[662px] w-full min-h-[330px] bg-gray-main">
          chart
        </Card>
        <Card className=" w-full min-h-[330px] bg-gray-main">sample</Card>
      </View>
      <View className="gap-6 mt-6">
        <Card className=" min-h-[330px] w-[60%] bg-gray-main">chart</Card>
        <Card className=" min-h-[330px] w-[40%] bg-gray-main">chart</Card>
      </View>
      <View className="gap-6 mt-6">
        <Card className=" min-h-[330px] w-[60%] bg-gray-main">chart</Card>
        <Card className=" min-h-[330px] w-[40%] bg-gray-main">chart</Card>
      </View>
    </PageWrapper>
  );
};

export { MainProducts };
