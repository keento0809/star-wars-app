import { ReactNode } from "react";
import { create } from "zustand";
import { Film } from "../_graphql/generated";

type CountStore = {
  count: number;
  inc: () => void;
  dec: () => void;
};

type ModalStore = {
  isModalOpen: boolean;
  modalContents: ReactNode;
  openModal: (contents: ReactNode) => void;
  closeModal: () => void;
};

type FilmsStore = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedFilm: Film | null;
  setSelectedFilm: (film: Film | null) => void;
  filteredFilmsCount: number;
  setFilteredFilmsCount: (filteredFilmsCount: number) => void;
};

export const useCountStore = create<CountStore>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

export const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  modalContents: <div>default modal contents</div>,
  openModal: (contents) =>
    set(() => ({ isModalOpen: true, modalContents: contents })),
  closeModal: () => set(() => ({ isModalOpen: false })),
}));

export const useFilmsStore = create<FilmsStore>((set) => ({
  searchQuery: "",
  selectedFilm: null,
  filteredFilmsCount: 0,
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedFilm: (film) => set({ selectedFilm: film }),
  setFilteredFilmsCount: (count) => set({ filteredFilmsCount: count }),
}));
