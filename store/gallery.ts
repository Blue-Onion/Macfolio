import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { photosLinks, type FolderNode } from "@/data";

const defaultGalleryLocation = photosLinks.library;
type GalleryStore = {
  activeGalleryLocation: FolderNode;
  setActiveGalleryLocation: (location: FolderNode) => void;
  resetActiveGalleryLocation: () => void;
};

export const useGalleryStore = create<GalleryStore>()(
  immer((set) => ({
    activeGalleryLocation: defaultGalleryLocation,
    setActiveGalleryLocation: (location) => {
      set((state) => {
        state.activeGalleryLocation = location;
      });
    },
    resetActiveGalleryLocation: () => {
      set((state) => {
        state.activeGalleryLocation = defaultGalleryLocation;
      });
    },
  }))
);
export default useGalleryStore;
