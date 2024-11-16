import { PropsWithChildren } from "react";

export const CharactersPresentation = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <p>presentation</p>
      {children}
    </div>
  );
};
