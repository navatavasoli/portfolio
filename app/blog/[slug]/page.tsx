import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { formatPostDate } from "@/lib/format-date";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Nava Tavasoli`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-28 md:py-32">
      <div className="mb-10 flex items-center gap-4">
        <Link
          href="/blog"
          className="font-tech text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← ALL POSTS
        </Link>
      </div>

      <time dateTime={post.date} className="font-tech text-xs text-primary">
        {formatPostDate(post.date)}
      </time>
      <h1 className="mb-6 mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
        {post.title}
      </h1>

      {post.image && (
        <div className="mb-8 aspect-video w-full overflow-hidden rounded-md border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </main>
  );
}
