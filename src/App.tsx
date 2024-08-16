import { AuthContextProvider } from "./context/auth/useAuth";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
