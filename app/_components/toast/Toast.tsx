import { X } from "lucide-react";
import { FC } from "react";
import toast, { Toaster } from "react-hot-toast";

export const notificationToast = () =>
  toast((t) => (
    <div className="border-blue-600 z-50 border bg-inherit p-6 rounded-xl min-h-[40px] text-white bg-slate-800">
      <p>This is a notification... for something</p>
      <button
        onClick={() => toast.dismiss(t.id)}
        className="outline-none border-none p-3"
      >
        <X size={16} />
      </button>
    </div>
  ));

export const errorToast = () =>
  toast((t) => (
    <div className="border-red-600 border-2 bg-white rounded-2xl p-6 min-h-[40px] text-slate-800">
      <p>Error: something is wrong...</p>
      <button
        onClick={() => toast.remove(t.id)}
        className="border border-slate-600 rounded-xl px-4 outline-none text-slate-800 text-3xl"
      >
        <X size={16} />
      </button>
    </div>
  ));

export const Toast: FC = () => {
  return <Toaster />;
};
