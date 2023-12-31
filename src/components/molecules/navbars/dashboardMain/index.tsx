import { Input, View } from "../../..";
import { SearchIcon } from "../../../../assets";
import colors from "../../../../../tailwindColors";

// Import Tailwind with styled-components

const NavbarDashboardMain = () => {
  console.log(colors);
  return (
    <View className="flex justify-between items-center px-[24px]  w-full ">
      <div className=" h-full"></div>
      <View className="gap-2 h-8 me-[24px]">
        <Input
          className="w-[160px] bg-gray-main"
          classNames={{ input: "bg-transparent" }}
          placeholder="Search..."
          suffix={<SearchIcon color="text-gray-primary" />}
        />
      </View>
    </View>
  );
};

export { NavbarDashboardMain };
