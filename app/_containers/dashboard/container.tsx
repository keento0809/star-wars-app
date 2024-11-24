import { Suspense } from "react";
import { DashBoardPresentation } from "./presentation";
import { PostListContainer } from "@/app/_components/lists/postList";
import { LoadingSpinner } from "@/app/_components/loadingSpinner/LoadingSpinner";
import { UserProfileContainer } from "@/app/_components/userProfile";

export const DashBoardContainer = () => {
  return (
    <DashBoardPresentation>
      <Suspense>
        <UserProfileContainer />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <PostListContainer />
      </Suspense>
    </DashBoardPresentation>
  );
};
