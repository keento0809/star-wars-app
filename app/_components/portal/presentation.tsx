"use client";

import { FC, useEffect, useState } from "react";
import { Toast } from "../toast/Toast";
import { createPortal } from "react-dom";
import { FilmModal } from "../modals/filmModal/FilmModal";

export const PortalPresentation: FC = () => {
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return mounted
    ? createPortal(
        <>
          <FilmModal />
          <Toast />
        </>,
        document.body
      )
    : null;
};
