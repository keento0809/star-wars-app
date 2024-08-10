import { FC } from "react";
import toast, { Toaster } from "react-hot-toast";

export const notificationToast = () =>
  toast.custom((t) => (
    <div className="border-blue-600 z-50 border bg-inherit p-6 rounded-xl min-h-[40px] text-white bg-slate-800">
      This is a notification
    </div>
  ));

export const errorToast = () =>
  toast.custom((t) => (
    <div className="border-red-600 bg-red-200 rounded-2xl p-6 min-h-[40px] text-slate-800">
      Error: something is wrong...
    </div>
  ));

export const Toast: FC = () => {
  return <Toaster />;
};
