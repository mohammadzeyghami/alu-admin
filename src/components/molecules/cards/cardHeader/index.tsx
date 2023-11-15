import React from "react";
import Card from "../../../atoms/card";
import { Text, View } from "../../..";
interface CardHeaderProps {
  LeftHeader?: React.ReactNode;
  LeftBody?: React.ReactNode;
  Right?: React.ReactNode;
  className?: string;
}
const CardHeader = ({
  LeftHeader,
  LeftBody,
  Right,
  className,
}: CardHeaderProps) => {
  return (
    <Card className={` gap-6 w-full max-w-[250px]  ${className} `}>
      <View className="gap-8">
        <View vertical className="gap-2">
          <Text className="text-[14px]">{LeftHeader}</Text>
          <Text className="text-[24px] font-bold text-black">{LeftBody}</Text>
        </View>
        <View className="h-full items-end mt-[42px]">
          <Text className="text-[12px] h-full ">{Right}</Text>
        </View>
      </View>
    </Card>
  );
};

export default CardHeader;
