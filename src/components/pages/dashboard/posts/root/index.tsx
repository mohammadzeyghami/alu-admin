import { View } from "../../../..";

import { ProductCard } from "../../../../molecules/cards/productCard";

const Posts = () => {
  return (
    <View className="mt-[50px] gap-5 flex flex-wrap">
      {/* <PostCard /> */}
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </View>
  );
};

export { Posts };
