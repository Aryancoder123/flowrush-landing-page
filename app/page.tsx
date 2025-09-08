import client from "@/lib/apolloClient";
import { gql } from "@apollo/client";

export default async function Home() {
  const { data } = await client.query({
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
        {data.posts.nodes.map((post: any) => (
          <li key={post.id}>
            <a href={`/${post.slug}`} className="text-blue-600 hover:underline">
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
