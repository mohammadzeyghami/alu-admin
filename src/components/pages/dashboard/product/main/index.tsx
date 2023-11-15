import { View } from "../../../..";
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
    <View vertical className="p-6">
      <CardsWrapper items={Items} />
    </View>
  );
};

export { MainProducts };
