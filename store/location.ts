import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations, type FolderNode } from "@/data";

// Always use the same default for both server and client to prevent hydration errors
const defaultLocation = locations.work;

type LocationStore = {
  activeLocation: FolderNode;
  setActiveLocation: (location: FolderNode) => void;
  resetActiveLocation: () => void;
};

export const useLocationStore = create<LocationStore>()(
  immer((set) => ({
    activeLocation: defaultLocation,
    setActiveLocation: (location) => {
      set((state) => {
        state.activeLocation = location;
      });
    },
    resetActiveLocation: () => {
      set((state) => {
        state.activeLocation = defaultLocation;
      });
    },
  }))
);
export default useLocationStore;
