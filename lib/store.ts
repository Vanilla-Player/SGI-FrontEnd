import { create } from "zustand";
import { ILayoutState, IUserProfile } from "./interfaces";
import { persist } from "zustand/middleware";

/**
 * Layout item store
 * ---
 * Handles storing nav items
 */

export const useLayoutStore = create<ILayoutState>()(
  persist(
    (set, _) => ({
      show: false,
      openSideBar: false,
      toggleSideBar: () => {
        set((state) => ({ show: !state.show }));
      },
      expandSidebar: () => {
        set((state) => ({ openSideBar: !state.openSideBar }));
      },
    }),
    { name: "set_layout_state" }
  )
);

export const useUser = create<IUserProfile>()(
  persist(
    (set, _) => ({
      id: "",
      email: "",
      username: "",
      avatar_url: "",
      created_at: "",
      updated_at: "",
      setUserData: (data: IUserProfile) => {
        set(data);
      },
    }),
    { name: "user_profile" }
  )
);
