import { FC, ReactNode } from "react";
import { X } from "lucide-react";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export const Modal: FC<ModalProps> = ({ children, onClose }) => (
  <div className="fixed inset-0 z-50 top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 これがモーダルやで、">
    <button
      className="flex w-full justify-end"
      aria-label="close"
      onClick={onClose}
    >
      <X size={16} className="block m-6" />
    </button>
    <div className="min-h-[100svh] この中身がmodal-contentです flex justify-center items-center">
      {children}
    </div>
  </div>
);
