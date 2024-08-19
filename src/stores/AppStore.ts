import { create } from "zustand";
import { persist } from "zustand/middleware";

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

export const useAppStore = create<AuthState & SidebarState>()(
  persist(
    (set, get) => ({
      authState: { user: null, isAuthenticated: false },
      login: () =>
        set({
          authState: { user: "cicciopasticcio", isAuthenticated: true },
        }),
      logout: () => set({ authState: { user: null, isAuthenticated: false } }),

      isSidebarOpen: false,
      toggleSidebar: () => set(() => ({ isSidebarOpen: !get().isSidebarOpen })),
      setSidebar: (isOpen) => set(() => ({ isSidebarOpen: isOpen })),
    }),
    {
      name: "pegaso-app-storage",
      partialize: (state) => ({ authState: state.authState }),
    }
  )
);
