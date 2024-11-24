import { PropsWithChildren } from "react";
import { User } from "./_types/userProfile";

type UserProfilePresentationProps = PropsWithChildren<{ user: User }>;

export const UserProfilePresentation = ({
  children,
  user,
}: UserProfilePresentationProps) => {
  return (
    <div>
      {children}
      <p>UserPresentation</p>
    </div>
  );
};
