import { Routes as Router, Route } from "react-router-dom";
import { Products } from "../root";
import { ProductDynamic } from "..";

// Custom table component

// App component
const ProductRoutes = () => {
  return (
    <Router>
      <Route index element={<Products />} />
      <Route path={"product/:id"} element={<ProductDynamic />} />
    </Router>
  );
};

export default ProductRoutes;
