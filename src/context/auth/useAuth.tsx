import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

// Definisci il tipo per lo stato di autenticazione
type AuthState = {
  isAuthenticated: boolean;
  user: string | null;
};

interface AuthContextProps {
  authState: AuthState;
  login: () => void;
  logout: () => void;
}

// Crea il contesto per l'autenticazione
const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    console.log(authState);
  }, [authState]);

  // Funzione per effettuare il login
  const login = () => {
    // Effettua la logica di autenticazione qui
    // Esempio: controlla se le credenziali sono valide
    // if (username === "admin" && password === "password") {
    //   setAuthState({ isAuthenticated: true, user: username });
    // } else {
    //   setAuthState({ isAuthenticated: false, user: null });
    // }

    setAuthState({ isAuthenticated: true, user: "pegaso" });
  };

  // Funzione per effettuare il logout
  const logout = () => {
    setAuthState({ isAuthenticated: false, user: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizzato per accedere al contesto di autenticazione
export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error(
      "useAuth deve essere utilizzato all'interno di AuthContextProvider"
    );
  }

  return authContext;
};
