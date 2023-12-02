import { PageWrapper, View } from "../../../..";
import Card from "../../../../atoms/card";
import CardsWrapper from "../../../../teamplates/CardsWrapper";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export interface MyCardsWrapper {
  Right?: string | React.ReactNode;
  LeftBody?: string | React.ReactNode;
  LeftHeader?: string | React.ReactNode;
  className?: string;
}
const ChartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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
        <Card className="w-full h-[400px] bg-gray-main">
          <AreaChart
            width={550}
            height={380}
            data={ChartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </Card>
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
