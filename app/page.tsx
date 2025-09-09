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
    <main className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-white">
          Posts from WordPress
        </h1>
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <ul className="space-y-4">
            {data?.posts?.nodes?.map((post) => (
              <li
                key={post.id}
                className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <a
                  href={`/${post.slug}`}
                  className="text-blue-400 hover:text-blue-300 font-medium text-lg transition-colors"
                >
                  {post.title}
                </a>
              </li>
            )) || (
              <li className="text-center py-12">
                <div className="text-slate-400 text-lg">No posts found</div>
                <div className="text-slate-500 text-sm mt-2">
                  Check your WordPress connection
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </main>
  );
}
