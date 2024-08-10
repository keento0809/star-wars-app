"use client";

import { Breadcrumb } from "@/app/_components/breadCrumb/BreadCrumb";
import { errorToast } from "@/app/_components/toast/Toast";
import { FC } from "react";

export const ApplyPage: FC = () => {
  return (
    <div className="portal">
      <Breadcrumb />
      <button onClick={errorToast}>Show Error</button>
    </div>
  );
};
