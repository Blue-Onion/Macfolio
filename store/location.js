import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { locations } from "@/data"

const defaultLocation=locations.work;
export const useLocationStore = create(immer((set)=>(
    {
        activeLocation:defaultLocation,
        setActiveLocation:(locations=null)=>{
            set((state)=>{
                state.activeLocation=locations;
            })
        },
        resetActiveLocation:()=>{
            set((state)=>{
                state.activeLocation=defaultLocation;
            })
        }
    }
)))
export default useLocationStore