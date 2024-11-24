import { PropsWithChildren } from "react";
import { Post } from "./_types/postList";

type PostListPresentationProps = PropsWithChildren<{ posts: Post[] }>;

const offset = 0;
const limit = 70;

export const PostListPresentation = ({
  children,
  posts,
}: PostListPresentationProps) => {
  return (
    <div className="space-y-4 py-10">
      <h2 className="text-xl font-bold">Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
        {posts.slice(offset, limit).map((post: Post) => (
          <article key={post.id} className="p-4 border rounded">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </article>
        ))}
        {children}
      </div>
    </div>
  );
};
