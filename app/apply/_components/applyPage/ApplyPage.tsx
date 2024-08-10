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
      <div className="py-8 flex flex-col gap-6 w-1/5 mr-auto">
        <button
          onClick={errorToast}
          className="px-6 py-2 rounded-xl border border-lime-500 font-normal text-lg"
        >
          Show Error
        </button>
        <button
          onClick={() => openModal(renderModalContents())}
          className="px-6 py-2 rounded-xl border font-normal text-lg border-orange-500"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
