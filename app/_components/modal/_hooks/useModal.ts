"use client";

import { useModalStore } from "@/app/_store/store";
import { useEffect } from "react";

export const useModal = () => {
  const { isModalOpen } = useModalStore();

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("no-doc-scroll");
    } else document.body.classList.remove("no-doc-scroll");

    return () => document.body.classList.remove("no-doc-scroll");
  }, [isModalOpen]);
};
