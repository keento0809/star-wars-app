import { ReactNode } from "react";
import { create } from "zustand";
import type { StateCreator } from "zustand";
import { CounterStore } from "./_types/counter/counter";
import { FilmsStore } from "./_types/films/films";

type ModalStore = {
  isModalOpen: boolean;
  modalContents: ReactNode;
  openModal: (contents: ReactNode) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  modalContents: <div>default modal contents</div>,
  openModal: (contents) =>
    set(() => ({ isModalOpen: true, modalContents: contents })),
  closeModal: () => set(() => ({ isModalOpen: false })),
}));

export const counterStoreCreator: StateCreator<CounterStore> = (set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
});

export const filmsStoreCreator: StateCreator<FilmsStore> = (set) => ({
  searchQuery: "",
  selectedFilm: null,
  filteredFilmsCount: 0,
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedFilm: (film) => set({ selectedFilm: film }),
  setFilteredFilmsCount: (count) => set({ filteredFilmsCount: count }),
});
