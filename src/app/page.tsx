import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function Home() {
  return (
    <div className="prose dark:prose-invert m-10 bg-white p-10 rounded border">
      <h4>We are working on something cool!</h4>
      {/* {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2 className="font-semibold">{post.title}</h2>
          </Link>
          {post.description && (
            <p className="text-gray-600 text-sm mt-5">{post.description}</p>
          )}
        </article>
      ))} */}
    </div>
  );
}
