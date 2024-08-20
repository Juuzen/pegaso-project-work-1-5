import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../stores/AppStore";
import { Button, Card, CardContent, Divider, TextField } from "@mui/material";
import style from "./LoginPage.module.scss";

const LoginPage = () => {
  const { login } = useAppStore();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  };

  return (
    <div className={style.loginContainer}>
      <Card>
        <CardContent sx={{ padding: 0 }}>
          <div className={style.cardContainer}>
            <div className={style.cardTitleContainer}>
              <div className={style.cardTitle}>PegasoFarm</div>
              <div className={style.cardSubtitle}>
                Sistema di gestione per aziende agricole
              </div>
            </div>

            <Divider />

            <div className={style.cardForm}>
              <form>
                <TextField
                  variant="filled"
                  id="login-username"
                  label="Username"
                  placeholder="admin"
                  fullWidth
                />
                <TextField
                  variant="filled"
                  id="login-password"
                  label="Password"
                  type="password"
                  fullWidth
                />

                <Button
                  onClick={handleLogin}
                  variant="contained"
                  color="primary"
                >
                  LOGIN
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
