import { postListFetcher } from "./_fetcher/postListFetcher";
import { PostListPresentation } from "./presentation";

export const PostListContainer = async () => {
  const posts = await postListFetcher();

  return (
    <PostListPresentation posts={posts}>
      <p>child component will be here...</p>
    </PostListPresentation>
  );
};
