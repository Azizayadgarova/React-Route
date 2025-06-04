import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import Home from "./routes/Home";

import ProductsLayout from "./routes/Products/ProductsLayout";
import ProductList from "./routes/Products/ProductList";
import ProductDetail from "./routes/Products/ProductDetail";

import UserList from "./routes/Users/UserList";

import UsersLayout from "./routes/Users/UserLayout";
import Oquvchi from "./routes/Users/Oquvchi";
import Oqituvchi from "./routes/Users/Oqituvchi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "users",
        element: <UsersLayout />,
        children: [
          { index: true, element: <UserList /> },
          { path: "oquvchi", element: <Oquvchi /> },
          { path: "oqituvchi", element: <Oqituvchi /> },
        ],
      },
      {
        path: "products",
        element: <ProductsLayout />,
        children: [
          { index: true, element: <ProductList /> },
          { path: ":productId", element: <ProductDetail /> },
        ],
      },
    ],
  },
]);

export default router;
