import { PageWrapper, View } from "../../../..";
import Card from "../../../../atoms/card";
import CardsWrapper from "../../../../teamplates/CardsWrapper";
// import { AreaChart, Area, CartesianGrid, Tooltip } from "recharts";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  plugins: {},
  scales: {
    y: {
      type: "linear" as const,
      display: true,
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      display: true,
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1",
    },
  ],
};

export function App() {
  return;
}

export interface MyCardsWrapper {
  Right?: string | React.ReactNode;
  LeftBody?: string | React.ReactNode;
  LeftHeader?: string | React.ReactNode;
  className?: string;
}
export const Piedata = {
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};
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
        <Card className="max-w-[662px] w-full  bg-gray-main">
          <Line title="hey" options={options} data={data} />
          {/* <ResponsiveContainer width="100%" height="100%"> */}
          {/* <AreaChart
            width={564}
            height={380}
            data={ChartData}
            margin={{
              top: 10,
              right: 0,
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
          </AreaChart> */}
          {/* </ResponsiveContainer> */}
        </Card>
        <Card className="w-full !max-w-[550px]   bg-gray-main">
          <Pie
            options={{ elements: {} }}
            data={Piedata}
            title="0"
            className="max-h-[280px]"
          />
          {/* <AreaChart
            width={564}
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
          </AreaChart> */}
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
