import { getClient } from "./lib/client";
import styles from "./page.module.css";

export default async function Home() {
  const {} = await getClient().query();
  return (
    <main className={styles.main}>
      <div className="">aaa</div>
    </main>
  );
}
