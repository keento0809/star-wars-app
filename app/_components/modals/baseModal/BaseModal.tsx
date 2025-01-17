"use client";

import { FC } from "react";
import { X } from "lucide-react";
import { useModal } from "./_hooks/useBaseModal";
import { useModalStore } from "@/app/_store/store";

export const BaseModal: FC = () => {
  const { isModalOpen, modalContents, closeModal } = useModalStore();

  useModal();

  return isModalOpen ? (
    <div className="fixed inset-0 z-50 top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 これがモーダルやで、">
      <button
        className="fixed right-4 top-4"
        aria-label="close"
        onClick={closeModal}
      >
        <X size={16} className="block m-6" />
      </button>
      <div className="min-h-[100svh] lg:max-w-md pb-8 mx-auto この中身がmodal-contentです flex justify-center items-center">
        {modalContents}
      </div>
    </div>
  ) : null;
};
