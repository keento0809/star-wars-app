"use client";

import { FilmCard } from "@/app/_components/cards/filmCard/FilmCard";
import { SearchBar } from "@/app/_components/searchBar/SearchBar";
import { Wrapper } from "@/app/_components/wrapper/Wrapper";
import { Film as FilmType } from "@/app/_graphql/generated";
import { Film } from "lucide-react";
import { FC } from "react";
import { useHome } from "./_hooks/useHome";

type HomePresentationProps = {
  allFilms: FilmType[];
};

export const HomePresentation: FC<HomePresentationProps> = ({ allFilms }) => {
  const { filteredFilms } = useHome({ allFilms });

  return (
    <Wrapper>
      <div className="mb-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <Film className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Star Wars Films</h1>
        </div>
        <SearchBar />
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredFilms?.map((film: any) => (
          <FilmCard key={film.id} {...film} />
        ))}
      </div>
    </Wrapper>
  );
};
