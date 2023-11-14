import { Breadcrumb } from "../..";
import { Input } from "../../..";
import { SearchIcon } from "../../../../assets";
import colors from "../../../../../tailwindColors";
// Import Tailwind with styled-components

const NavbarDashboardMain = () => {
  console.log(colors);
  return (
    <div className="border-b-[1px] flex justify-between px-[24px]  border-gray-light w-full ">
      <div className=" h-full">
        <Breadcrumb />
      </div>
      <div className=" h-full ">
        <Input
          className="w-[160px] bg-gray-main"
          classNames={{ input: "bg-transparent" }}
          placeholder="Search..."
          suffix={<SearchIcon color="text-gray-primary" />}
        />
      </div>

      {/* <div></div> */}
    </div>
  );
};

export { NavbarDashboardMain };
