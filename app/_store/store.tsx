import { ReactNode } from "react";
import { create } from "zustand";

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
