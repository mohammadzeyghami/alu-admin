import { Routes as Router, Route } from "react-router-dom";
import { MainProducts } from "../product";

const DashboardRoutes = () => {
  return (
    <Router>
      <Route path="*" element={<MainProducts />}></Route>
    </Router>
  );
};

export default DashboardRoutes;
