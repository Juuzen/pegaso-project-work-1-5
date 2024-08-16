import { useAppStore } from "../../stores/AppStore";

export const HomePage = () => {
  const { authState } = useAppStore();

  return <>Sono nella home {authState.user}</>;
};
