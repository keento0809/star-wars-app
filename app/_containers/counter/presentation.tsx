"use client";

import { Counter } from "@/app/_components/counter/Counter";
import { Wrapper } from "@/app/_components/wrapper/Wrapper";
import { PropsWithChildren } from "react";

export const CounterPresentation = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <Counter />
      {children}
    </Wrapper>
  );
};
