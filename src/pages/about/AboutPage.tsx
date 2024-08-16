import { useAuth } from "../../context/auth/useAuth";

export const AboutPage = () => {
  const { authState } = useAuth();

  return <>Sono nella about {authState.user}</>;
};
