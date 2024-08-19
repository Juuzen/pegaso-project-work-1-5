import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./context/auth/useAuth";
import { AppRouter } from "./routes/AppRouter";
import ReactQueryRewind from "react-query-rewind";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>

      <ReactQueryRewind />
    </QueryClientProvider>
  );
}

export default App;
