import { blogPosts } from "@/data/blog-posts";
import BlogPostCard from "@/components/blog-post-card";
import LiveVisitors from "@/components/ui/live-visitors";

export default function Blog() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Blog</h2>
          <LiveVisitors />
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
