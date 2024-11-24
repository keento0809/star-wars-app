import { fetchAllFilms } from "@/app/_utils/fetchers/fetcher";
import { HomePresentation } from "./presentation";
import { Suspense } from "react";
import { LoadingSpinner } from "@/app/_components/loadingSpinner/LoadingSpinner";

export const HomeContainer = async () => {
  const allFilms = await fetchAllFilms();

  if (!allFilms) throw new Error("Failed to fetch all films...");

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HomePresentation allFilms={allFilms}></HomePresentation>
    </Suspense>
  );
};
