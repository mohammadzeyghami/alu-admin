// import { useInfiniteQuery } from "@tanstack/react-query";
// import InfiniteScroll from "react-infinite-scroll-component";
// import "./app.css";

// const getUsers = async ({ pageParam = 0 }) => {};

// const Something = () => {
//   const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
//     queryKey: ["users"],
//     queryFn: getUsers,
//     getNextPageParam: (lastPage) => {
//       if (lastPage.prevOffset + 10 > lastPage.articleCount) {
//         return false;
//       }

//       return lastPage.prevOffset + 10;
//     },
//   });
//   const articles = data?.pages.reduce((acc, page) => {
//     return [...acc, ...page.articles];
//   }, []);
//   console.log(articles);

//   return (
//     <div>
//       <h1>Hello monsterlessons</h1>

//       <InfiniteScroll
//         dataLength={articles ? articles.length : 0}
//         next={() => fetchNextPage()}
//         hasMore={hasNextPage}
//         loading={<div>Loading...</div>}
//       >
//         <div>
//           {articles &&
//             articles.map((article, index) => (
//               <div key={index} className="element">
//                 {article.title}
//               </div>
//             ))}
//         </div>
//       </InfiniteScroll>
//     </div>
//   );
// };

// export default Something;

import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { PostCard } from "../../components/molecules/cards/postCard";
import { View } from "../../components";

const staticData = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  // Add more items as needed
];

const InfiniteScrollComponent = () => {
  const [items, setItems] = useState(staticData);

  const fetchMoreData = () => {
    // Simulate fetching more data (in a real-world scenario, you'd make an API call here)
    setTimeout(() => {
      setItems((prevItems) => [...prevItems, ...staticData]);
    }, 1000);
  };

  return (
    <View className="h-[100vh] overflow-y-auto">
      <InfiniteScroll
        dataLength={items.length}
        className="w-full"
        next={fetchMoreData}
        hasMore={true} // Set to true to simulate infinite data
        loader={<p>Loading more...</p>}
      >
        {items.map(() => (
          <View className="w-full">
            <PostCard />
          </View>
        ))}
      </InfiniteScroll>
    </View>
  );
};

export default InfiniteScrollComponent;
