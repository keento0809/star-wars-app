import { getClient } from "../../_graphql/client";
import {
  Film,
  GetAllFilmsQuery,
  Species,
  GetAllSpeciesQuery,
} from "@/app/_graphql/generated";
import {
  QUERY_GET_ALL_FILMS,
  QUERY_GET_SPECIES,
} from "@/app/_graphql/queries/queries";
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

export const fetchAllSpecies = cache(async (id: number) => {
  const { data, errors } = await getClient().query<GetAllSpeciesQuery>({
    query: QUERY_GET_SPECIES,
    variables: { speciesId: id.toString() },
  });

  if (errors || !data.allSpecies?.species)
    throw new Error(`Failed to fetch all films: ${errors}`);

  const validSpecies =
    data.allSpecies?.species?.filter((s): s is Species => s !== null) ?? [];

  console.log("valid: ", validSpecies.length);

  return validSpecies;
});
