import { blogPosts } from "@/data/blog-posts";
import BlogPostCard from "@/components/blog-post-card";

export default function Blog() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">Blog</h2>
        <div className="text-muted-foreground text-sm mb-8" data-testid="page-views-blog">
          (2803 views)
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
