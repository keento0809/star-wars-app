import { Wrapper } from "@/app/_components/wrapper/Wrapper";
import { PropsWithChildren } from "react";

export const DashBoardPresentation = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper>
      <h1 className="py-8 text-xl font-semibold text-center">Dashboard</h1>
      {children}
    </Wrapper>
  );
};
