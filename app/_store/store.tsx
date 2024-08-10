import { ReactNode } from "react";
import { create } from "zustand";

type ModalStore = {
  isModalOpen: boolean;
  modalContents: ReactNode;
  setModalContents: () => void;
  openModal: (contents: ReactNode) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  modalContents: <div>modal contents here</div>,
  setModalContents: () => set(() => ({})),
  openModal: (contents) =>
    set(() => ({ isModalOpen: true, modalContents: contents })),
  closeModal: () => set(() => ({ isModalOpen: false })),
}));
