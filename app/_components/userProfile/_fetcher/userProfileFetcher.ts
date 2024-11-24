import { User } from "../_types/userProfile";

export async function getUser(): Promise<User> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}
