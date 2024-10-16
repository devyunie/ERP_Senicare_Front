import { create } from "zustand";

interface useHrDetailUpdateStore {
    update: boolean;
    setUpdate: (update:boolean) => void;

}

const useStore = create<useHrDetailUpdateStore>(set =>({
    update: false,
    setUpdate: (update:boolean)=>set(state=>({
        ...state,update
    }))
}));

export default useStore;