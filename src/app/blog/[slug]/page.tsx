import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/lib/blog-data";
import { BlogPostContent } from "@/components/sections/blog/blog-post-content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Back link */}
      <Link
        href="/blog"
        className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground">{post.readTime}</span>
        </div>
        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="text-muted-foreground">{post.excerpt}</p>
        <div className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
          <time>{post.date}</time>
        </div>
      </header>

      {/* Content */}
      <BlogPostContent sections={post.content} />
    </div>
  );
}
