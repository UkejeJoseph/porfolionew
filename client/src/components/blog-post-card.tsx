import { BlogPost } from "@/data/blog-posts";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div className="bg-background border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all">
      <div className="flex md:flex-row flex-col">
        <img
          src={post.image}
          alt={post.title}
          className="md:w-64 w-full h-48 md:h-auto object-cover"
        />
        <div className="p-6 flex-1">
          <div className="text-sm text-muted-foreground mb-2" data-testid={`blog-meta-${post.id}`}>
            {post.category} • {post.date}
          </div>
          <h3 className="text-xl font-semibold mb-3" data-testid={`blog-title-${post.id}`}>
            {post.title}
          </h3>
          <div className="text-muted-foreground mb-4" data-testid={`blog-views-${post.id}`}>
            {post.views.toLocaleString()} views
          </div>
          <a
            href={post.url}
            data-testid={`link-blog-${post.id}`}
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
