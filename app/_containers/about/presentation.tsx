"use client";

import { Wrapper } from "@/app/_components/wrapper/Wrapper";
import { PropsWithChildren } from "react";

export const AboutPresentation = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <p className="text-center text-lg font-semibold">
        This is the about page.
      </p>
      {children}
    </Wrapper>
  );
};
