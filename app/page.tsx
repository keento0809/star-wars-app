import { getClient } from "./lib/client";
import { Film, FilmsQuery } from "./graphql/generated";
import { QUERY_FILMS } from "./graphql/client";
import { HomePage } from "./HomePage";

export default async function Home() {
  const { data, loading, error } = await getClient().query<FilmsQuery>({
    query: QUERY_FILMS,
  });

  if (loading) return <div>Loading now...</div>;
  if (error) {
    return <div>{error.message}</div>;
  }

  const validData =
    data.allFilms && data.allFilms.films
      ? data.allFilms.films.filter((d): d is Film => d !== undefined)
      : [];

  return <HomePage data={validData} />;
}
