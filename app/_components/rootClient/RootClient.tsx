"use client";

import { FC, ReactNode } from "react";
import { Portal } from "../portal/Portal";
import { Nav } from "../nav/Nav";
import { Footer } from "../footer/Footer";

type LayoutProps = {
  children: ReactNode;
};

export const RootClient: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-[100svh]">
      <Portal />
      <Nav />
      {children}
      <Footer />
    </div>
  );
};
