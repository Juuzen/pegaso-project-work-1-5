import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../stores/AppStore";

const LoginPage = () => {
  const { login } = useAppStore();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  };

  return (
    <div style={{ width: 400, backgroundColor: "red" }}>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
