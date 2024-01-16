import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) throw new Error("Unable fetch posts");
  return res.json();
}

export const metadata: Metadata = {
  title: "Blog | next app",
  description: "ID",
};

export default async function Blog() {
  const post = await getData();
  return (
    <>
      <h1>BLOGERS</h1>
      <ul>
        {post?.slice(post.length - 10).map((pos: any) => (
          <li key={pos.id}>
            <Link href={`/blog/${pos.id}`}>{pos.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
