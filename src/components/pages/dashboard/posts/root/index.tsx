import { PageWrapper, View } from "../../../..";

import { PostCard } from "../../../../molecules/cards/postCard";

const Posts = () => {
  return (
    <PageWrapper>
      <View className="w-full flex-wrap gap-6 mt-6 ">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </View>
    </PageWrapper>
  );
};

export { Posts };
