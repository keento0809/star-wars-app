import { fetchAllSpecies } from "@/app/_utils/fetchers/fetcher";
import { CharactersPresentation } from "./presentation";

export const CharactersContainer = async () => {
  const allSpecies = await fetchAllSpecies(1);

  if (!allSpecies) throw new Error("Failed to fetch all species...");

  return (
    <CharactersPresentation allSpecies={allSpecies}>
      <p>container</p>
    </CharactersPresentation>
  );
};
