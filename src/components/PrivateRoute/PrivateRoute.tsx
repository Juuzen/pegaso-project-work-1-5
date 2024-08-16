import { Navigate } from "react-router-dom";
import { Layout } from "../../layout/Layout";
import { useAppStore } from "../../stores/AppStore";

const PrivateRoute = () => {
  const { authState } = useAppStore();

  if (!authState.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Layout />;
};

export default PrivateRoute;
