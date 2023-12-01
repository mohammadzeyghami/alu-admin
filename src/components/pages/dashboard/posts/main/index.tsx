import { Routes as Router, Route } from "react-router-dom";
import { Posts, PostsAdd } from "..";
import { PostsEdit } from "../edit";
const PostsRoutes = () => {
  return (
    <Router>
      <Route path="*" element={<Posts />} />
      <Route path="*" element={<PostsAdd />} />
      <Route path="*" element={<PostsEdit />} />
    </Router>
  );
};

export default PostsRoutes;
