import { FC, ReactNode } from "react";
import { X } from "lucide-react";
import Link from "next/link";

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
    <div className="min-h-[100svh] flex justify-center items-center">
      <div className="py-8">
        <Link href="/apply">Apply</Link>
      </div>
      {children}
    </div>
  </div>
);
