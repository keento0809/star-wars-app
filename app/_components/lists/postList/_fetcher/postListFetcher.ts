import { Post } from "../_types/postList";

export async function postListFetcher(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`Failed to fetch data...`);

  return res.json();
}
