import blogData from "@/data/blogData";
import Hero from "./components/Hero";
import BlogContent from "./components/BlogContent";
import RecentBlog from "./components/RecentBlog";

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const parsed = id ? parseInt(id, 10) : NaN;

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
      <BlogContent blog={blog} />
      {/* <RecentBlog/> */}
    </div>
  );
}
