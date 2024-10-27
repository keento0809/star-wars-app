"use client";

import { FC, ReactNode } from "react";
import { Portal } from "../portal/Portal";
import { Footer } from "../footer/Footer";
import { NavContainer } from "../nav";

type LayoutProps = {
  children: ReactNode;
};

export const RootClient: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-[100svh]">
      <Portal />
      <NavContainer />
      {children}
      <Footer />
    </div>
  );
};
