import { getClient } from "../../_graphql/client";
import { Film, FilmsQuery } from "@/app/_graphql/generated";
import { QUERY_FILMS } from "@/app/_graphql/queries/queries";
import { cache } from "react";

export const getFilmData = cache(async () => {
  const { data, errors } = await getClient().query<FilmsQuery>({
    query: QUERY_FILMS,
  });

  if (errors) throw new Error(`Failed to fetch data: ${errors}`);

  const validFilmData =
    data.allFilms && data.allFilms.films
      ? data.allFilms.films.filter((d): d is Film => d !== undefined)
      : [];

  return validFilmData;
});
