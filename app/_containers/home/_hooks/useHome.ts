"use client";

import { Film } from "@/app/_graphql/generated";
import { useFilmsStore } from "@/app/_store/store";

type UseHomeProps = {
  allFilms: Film[];
};

export const useHome = ({ allFilms }: UseHomeProps) => {
  const { searchQuery } = useFilmsStore();

  const filteredFilms = allFilms?.filter((film: any) =>
    film.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return {
    filteredFilms,
  };
};
