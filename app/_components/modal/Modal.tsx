import { FC, ReactNode } from "react";
import { X } from "lucide-react";
import { useModal } from "./_hooks/useModal";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export const Modal: FC<ModalProps> = ({ children, onClose }) => {
  useModal();

  return (
    <div className="fixed inset-0 z-50 top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 これがモーダルやで、">
      <button
        className="fixed right-4 top-4"
        aria-label="close"
        onClick={onClose}
      >
        <X size={16} className="block m-6" />
      </button>
      <div className="min-h-[100svh] lg:max-w-md pb-8 mx-auto この中身がmodal-contentです flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};
