import { create } from "zustand";

interface AuthState {
  authState: { user: string | null; isAuthenticated: boolean };
  login: () => void;
  logout: () => void;
}

interface SidebarState {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  setSidebar: (isOpen: boolean) => void;
}

export const useAppStore = create<AuthState & SidebarState>()((set) => ({
  authState: { user: null, isAuthenticated: false },
  login: () =>
    set(() => ({
      authState: { user: "cicciopasticcio", isAuthenticated: true },
    })),
  logout: () =>
    set(() => ({ authState: { user: null, isAuthenticated: false } })),

  isSidebarOpen: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setSidebar: (isOpen) => set(() => ({ isSidebarOpen: isOpen })),
}));
