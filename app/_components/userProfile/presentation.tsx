import { PropsWithChildren } from "react";
import { User } from "./_types/userProfile";

type UserProfilePresentationProps = PropsWithChildren<{ user: User }>;

export const UserProfilePresentation = ({
  children,
  user,
}: UserProfilePresentationProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold">User Profile</h2>
      <div className="mt-2">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
      </div>
      {children}
    </div>
  );
};
