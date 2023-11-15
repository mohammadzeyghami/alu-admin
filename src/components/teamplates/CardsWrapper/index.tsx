import { View } from "../..";

import CardHeader from "../../molecules/cards/cardHeader";
import { MyCardsWrapper } from "../../pages/dashboard/product";
interface MYCardProps {
  items: MyCardsWrapper[];
}
const CardsWrapper = ({ items }: MYCardProps) => {
  return (
    <View className="gap-6 w-full justify-between flex-wrap">
      {items.map(({ LeftBody, LeftHeader, Right, className }, index) => (
        <CardHeader
          LeftBody={LeftBody}
          LeftHeader={LeftHeader}
          Right={Right}
          className={`${
            index % 2 === 0 ? "bg-primary-light" : "bg-white"
          } ${className}`}
        />
      ))}
    </View>
  );
};

export default CardsWrapper;
