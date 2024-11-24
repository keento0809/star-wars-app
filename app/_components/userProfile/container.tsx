import { getUser } from "./_fetcher/userProfileFetcher";
import { UserProfilePresentation } from "./presentation";

export const UserProfileContainer = async () => {
  const user = await getUser();

  return (
    <UserProfilePresentation user={user}>UserProfile</UserProfilePresentation>
  );
};
