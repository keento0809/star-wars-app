import { getClient } from "./lib/client";
import { FilmsQuery } from "./graphql/generated";
import { QUERY_FILMS } from "./graphql/client";
import { HomePage } from "./HomePage";

export default async function Home() {
  const {
    data: data_films,
    loading,
    error,
  } = await getClient().query<FilmsQuery>({
    query: QUERY_FILMS,
  });

  if (loading) return <div>Loading now...</div>;
  if (error) {
    return <div>{error.message}</div>;
  }

  return <HomePage data={data_films} />;
}
