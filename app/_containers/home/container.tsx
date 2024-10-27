import { fetchAllFilms } from "@/app/_utils/fetchers/fetcher";
import { HomePresentation } from "./presentation";

export const HomeContainer = async () => {
  const allFilms = await fetchAllFilms();

  if (!allFilms) throw new Error("Failed to fetch all films...");

  return <HomePresentation allFilms={allFilms}></HomePresentation>;
};
