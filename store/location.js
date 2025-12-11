import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { locations } from "@/data";

// Always use the same default for both server and client to prevent hydration errors
const defaultLocation = locations.work;

export const useLocationStore = create(
  immer((set) => ({
    activeLocation: defaultLocation,
    setActiveLocation: (locations = null) => {
      set((state) => {
        state.activeLocation = locations;
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
