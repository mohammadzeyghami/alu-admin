import { Routes, Route } from "react-router-dom";
import {
  AddProducts,
  EditProduct,
  MainProducts,
  RemoveProduct,
} from "./product";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<MainProducts />}></Route>
      <Route path="/add" element={<AddProducts />}></Route>
      <Route path="/remove" element={<RemoveProduct />}></Route>
      <Route path="/edit" element={<EditProduct />}></Route>
    </Routes>
  );
};

export { DashboardRoutes };
