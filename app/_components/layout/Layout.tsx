"use client";

import { FC, ReactNode } from "react";
import { Portal } from "../portal/Portal";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Portal />
      {children}
    </div>
  );
};
