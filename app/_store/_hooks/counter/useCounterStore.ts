import { create } from "zustand";
import { CounterStore } from "../../_types/counter/counter";
import { counterStoreCreator } from "../../store";

export const useCounterStore = create<CounterStore>()(counterStoreCreator);
