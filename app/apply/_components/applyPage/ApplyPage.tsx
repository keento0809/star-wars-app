"use client";

import { Breadcrumb } from "@/app/_components/breadCrumb/BreadCrumb";
import { errorToast } from "@/app/_components/toast/Toast";
import { useModalStore } from "@/app/_store/store";
import { FC } from "react";

const renderModalContents = () => {
  return (
    <div className="p-4 font-bold text-lg text-purple-400">
      <p>Your data successfully submitted!!</p>
    </div>
  );
};

export const ApplyPage: FC = () => {
  const { openModal } = useModalStore();
  return (
    <div className="portal p-6">
      <Breadcrumb />
      <button onClick={errorToast}>Show Error</button>
      <div className="py-4">
        <button onClick={() => openModal(renderModalContents())}>Submit</button>
      </div>
    </div>
  );
};
