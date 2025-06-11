import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import LoginLayout from "./routes/LoginLayout";
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginLayout />
  },
  {
    element: <ProtectedRoute />, // protect everything below
    children: [
      {
        path: "/",
        element: <RootLayout />,
      }
    ]
  }
]);

export default router;
