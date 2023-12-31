// import { useInfiniteQuery } from "@tanstack/react-query";
// import InfiniteScroll from "react-infinite-scroll-component";
// import "./app.css";

// import { useState } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { View } from "../../../..";
// import { PostCard } from "../../../../molecules/cards/postCard";

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
import { PostCard } from "../../../../molecules/cards/postCard";
import { PageWrapper } from "../../../..";

export const Posts = () => {
  const [items, setItems] = useState(Array.from({ length: 10 }));

  const fetchMoreData = () => {
    console.log("Fetching more data...");
    setTimeout(() => {
      setItems((prevItems) => prevItems.concat(Array.from({ length: 10 })));
    }, 1500);
  };

  return (
    <PageWrapper>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={true} // Ensure this is always true until all items are loaded
        loader={<h4>Loading...</h4>}
      >
        {items.map((_, index) => (
          <PostCard key={index} />
        ))}
      </InfiniteScroll>
    </PageWrapper>
  );
};
