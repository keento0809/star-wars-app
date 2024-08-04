import { getFilmData } from "./_lib/client";
import { HomePage } from "./HomePage";

export default async function Home() {
  const validData = await getFilmData();

  return <HomePage data={validData} />;
}
