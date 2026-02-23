"use client";
import { useParams } from "next/navigation";
import blogData from "@/data/blogData";
import Hero from "./components/Hero";
import BlogContent from "./components/BlogContent";
import RecentBlog from "./components/RecentBlog";

export default function Page() {
  const params = useParams();
  const rawId = params?.id as string | undefined;
  const parsed = rawId
    ? parseInt(Array.isArray(rawId) ? rawId[0] : rawId, 10)
    : NaN;

  if (Number.isNaN(parsed)) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Invalid blog id</h2>
      </div>
    );
  }

  const blog = blogData.find((b) => b.id === parsed);
  if (!blog) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Blog not found</h2>
      </div>
    );
  }

  return (
    <div>
      <Hero blog={blog} />
      <BlogContent blog={blog}/>
      {/* <RecentBlog/> */}
    </div>
  );
}
