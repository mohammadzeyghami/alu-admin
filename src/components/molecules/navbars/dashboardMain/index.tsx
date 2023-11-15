import { Breadcrumb } from "../..";
import { Input, View } from "../../..";
import { SearchIcon } from "../../../../assets";
import colors from "../../../../../tailwindColors";
// Import Tailwind with styled-components

const NavbarDashboardMain = () => {
  console.log(colors);
  return (
    <View className="flex justify-between px-[24px]  w-full ">
      <View className=" h-full">
        <Breadcrumb />
      </View>
      <View className=" h-full ">
        <Input
          className="w-[160px] bg-gray-main"
          classNames={{ input: "bg-transparent" }}
          placeholder="Search..."
          suffix={<SearchIcon color="text-gray-primary" />}
        />
      </View>

      {/* <div></div> */}
    </View>
  );
};

export { NavbarDashboardMain };
