import { Film } from "@/app/_graphql/generated";

export type FilmsStore = {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedFilm: Film | null;
  setSelectedFilm: (film: Film | null) => void;
  filteredFilmsCount: number;
  setFilteredFilmsCount: (filteredFilmsCount: number) => void;
};
