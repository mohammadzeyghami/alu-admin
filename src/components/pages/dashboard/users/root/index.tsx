import { Routes as Router, Route } from "react-router-dom";
import { MainUser } from "../main";

const UsersRoots = () => {
  return (
    <Router>
      <Route path="*" element={<MainUser />}></Route>
    </Router>
  );
};

export { UsersRoots };
