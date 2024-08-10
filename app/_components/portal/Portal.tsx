"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import { Modal } from "../modal/Modal";
import { Toast } from "../toast/Toast";
import { createPortal } from "react-dom";

type PortalProps = {
  isModalOpen?: boolean;
  modalContents?: ReactNode;
  onClose?: () => void;
};

export const Portal: FC<PortalProps> = ({
  isModalOpen = false,
  modalContents,
  onClose = () => {},
}) => {
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return mounted && typeof window === "object"
    ? createPortal(
        <div className="this-is-portal">
          {isModalOpen && (
            <Modal onClose={onClose}>
              <div className="modal-contents">
                {modalContents ? modalContents : "modal"}
              </div>
            </Modal>
          )}
          <Toast />
        </div>,
        document.body
      )
    : null;
};
