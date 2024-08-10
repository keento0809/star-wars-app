"use client";

import { FC, ReactNode } from "react";
import { useModalStore } from "@/app/_store/store";
import { Portal } from "../portal/Portal";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { isModalOpen, modalContents, closeModal } = useModalStore();

  return (
    <div className="layout">
      <Portal
        isModalOpen={isModalOpen}
        onClose={closeModal}
        modalContents={modalContents}
      />
      {children}
    </div>
  );
};
