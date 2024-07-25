import { getClient } from "./lib/client";
import styles from "./page.module.css";
import { TestQuery } from "./graphql/generated";
import { QUERY_GET_TEST } from "./graphql/client";
import { HomePage } from "./HomePage";

export default async function Home() {
  const {
    data: data_test,
    loading,
    error,
  } = await getClient().query<TestQuery>({
    query: QUERY_GET_TEST,
  });

  if (loading) return <div>Loading now...</div>;
  if (error) {
    return <div>{error.message}</div>;
  }

  return <HomePage data={data_test} />;
}
