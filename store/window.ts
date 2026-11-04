import { INITIAL_Z_INDEX, WINDOW_CONFIG, type FileNode, type WindowKey, type WindowState } from "@/data";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type WindowStore = {
  windows: Record<WindowKey, WindowState>;
  nextZindex: number;
  openWindow: (windowKey: WindowKey, data?: FileNode | null) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey) => void;
  minimizeWindow: (windowKey: WindowKey) => void;
  toggleMaximize: (windowKey: WindowKey) => void;
};

const useWindowStore = create<WindowStore>()(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZindex: INITIAL_Z_INDEX + 1,
    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.isMinimized = false;
        win.data = data ?? win.data;
        win.zIndex = state.nextZindex;
        state.nextZindex++;
      }),
    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.isMinimized = false;
        win.isMaximized = false;
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
    minimizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isMinimized = true;
      }),
    toggleMaximize: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isMaximized = !win.isMaximized;
      }),
  }))
);

export default useWindowStore;
