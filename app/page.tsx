import client from "@/lib/apollo-client";
import { gql } from "@apollo/client";

interface Post {
  id: string;
  title: string;
  slug: string;
}

interface PostsData {
  posts: {
    nodes: Post[];
  };
}

export default async function Home() {
  const { data } = await client.query<PostsData>({
    query: gql`
      query GetPosts {
        posts {
          nodes {
            id
            title
            slug
          }
        }
      }
    `,
  });

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts from WordPress</h1>
      <ul className="space-y-2">
        {data?.posts?.nodes?.map((post) => (
          <li key={post.id}>
            <a href={`/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title}
            </a>
          </li>
        )) || <li>No posts found</li>}
      </ul>
    </main>
  );
}
