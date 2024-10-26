"use client";

import { FC, useEffect, useState } from "react";
import { Modal } from "../modal/Modal";
import { Toast } from "../toast/Toast";
import { createPortal } from "react-dom";

export const Portal: FC = () => {
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return mounted
    ? createPortal(
        <>
          <Modal />
          <Toast />
        </>,
        document.body
      )
    : null;
};
