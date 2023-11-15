import { Routes as Router, Route } from "react-router-dom";

import { Users } from "..";

const UsersRoots = () => {
  return (
    <Router>
      <Route path="*" element={<Users />}></Route>
    </Router>
  );
};

export { UsersRoots };
