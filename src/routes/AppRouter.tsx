import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import { AboutPage } from "../pages/about/AboutPage";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      element: <PrivateRoute />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

  return <RouterProvider router={router} />;
};
