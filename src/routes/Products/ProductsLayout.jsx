import { Outlet } from "react-router-dom";

export default function ProductsLayout() {
  return (
    <div>
      <h2>Our Products</h2>
      <Outlet />
    </div>
  );
}
