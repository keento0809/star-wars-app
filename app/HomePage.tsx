"use client";

import { FC } from "react";
import { Film, FilmsQuery } from "./graphql/generated";
import { List } from "./components/list/List";

type HomePageProps = {
  data: FilmsQuery;
};

export const HomePage: FC<HomePageProps> = ({ data }) => {
  const validData =
    data.allFilms && data.allFilms.films
      ? data.allFilms.films.filter((d): d is Film => d !== undefined)
      : [];

  return (
    <div>
      <h4>HomePage</h4>
      <List data={validData} />
    </div>
  );
};
