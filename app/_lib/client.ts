import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";
import { cache } from "react";
import { Film, FilmsQuery } from "../_graphql/generated";
import { QUERY_FILMS } from "../_graphql/client";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
    }),
  });
});

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
