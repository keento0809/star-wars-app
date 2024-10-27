import { getClient } from "../../_graphql/client";
import { Film, GetAllFilmsQuery } from "@/app/_graphql/generated";
import { QUERY_GET_ALL_FILMS } from "@/app/_graphql/queries/queries";
import { cache } from "react";

export const fetchAllFilms = cache(async () => {
  const { data, errors } = await getClient().query<GetAllFilmsQuery>({
    query: QUERY_GET_ALL_FILMS,
  });

  if (errors) throw new Error(`Failed to fetch all films: ${errors}`);

  const validFilms =
    data.allFilms && data.allFilms.films
      ? data.allFilms.films.filter((d): d is Film => d !== undefined)
      : [];

  return validFilms;
});
