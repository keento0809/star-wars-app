import { PropsWithChildren } from "react";

export const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-auto px-8 xl:max-w-7xl xl:px-2 min-h-[calc(100svh_-_119px)]">
      {children}
    </div>
  );
};
