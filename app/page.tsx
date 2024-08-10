import { getFilmData } from "./_lib/client";
import { HomePage } from "./HomePage";

export default async function Home() {
  try {
    const validData = await getFilmData();

    return <HomePage data={validData} />;
  } catch (error) {
    console.error(error);

    throw new Error(`failed to fetch data: ${error}`);
  }
}
