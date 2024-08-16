import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import { AboutPage } from "../pages/about/AboutPage";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

export const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
