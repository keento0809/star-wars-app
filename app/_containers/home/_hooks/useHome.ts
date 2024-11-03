"use client";

import { Film } from "@/app/_graphql/generated";
import { useFilmsStore } from "@/app/_store/_hooks/films/useFilmsStore";
import { useEffect, useMemo } from "react";

type UseHomeProps = {
  allFilms: Film[];
};

export const useHome = ({ allFilms }: UseHomeProps) => {
  const { searchQuery, setFilteredFilmsCount } = useFilmsStore();

  const filteredFilms = useMemo(
    () =>
      allFilms?.filter((film: Film) =>
        film?.title?.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery, allFilms]
  );

  useEffect(() => {
    setFilteredFilmsCount(filteredFilms.length);
  }, [filteredFilms.length, setFilteredFilmsCount]);

  return {
    filteredFilms,
  };
};
