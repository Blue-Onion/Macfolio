import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@/data";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZindex: INITIAL_Z_INDEX + 1,
    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.data = data ?? win.data;
        win.zIndex = state.nextZindex;
        state.nextZindex++;
      }),
    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.data = null;
        win.zIndex = INITIAL_Z_INDEX;
      }),
    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];

        if (!win) return;
        win.zIndex = state.nextZindex;
        state.nextZindex++;
      }),
  }))
);

export default useWindowStore;
