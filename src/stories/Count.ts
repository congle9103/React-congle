import { create } from "zustand";

interface CountState  {
    count:number,
    setCount:()=>void
}

export const useCount = create<CountState>((set,get)=>({
    count : 0,
    setCount: () => set((state)=>({count:state.count + 1})) 
}))