import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { MediaFrame } from "@/components/site/media-frame";
import { getAllPosts } from "@/lib/blog";
import { formatPostDate } from "@/lib/format-date";

export const metadata: Metadata = {
  title: "Blog — Nava Tavasoli",
  description: "Posts from Nava Tavasoli.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-28 md:py-32">
      <div className="mb-10 flex items-center gap-4">
        <Link
          href="/"
          className="font-tech text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← HOME
        </Link>
      </div>
      <h1 className="mb-10 font-display text-3xl font-semibold tracking-tight">
        Blog
      </h1>

      {posts.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No posts yet — check back soon.
        </p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-4 rounded-md border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5"
            >
              {post.image ? (
                <div className="aspect-video w-full overflow-hidden rounded-sm border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <MediaFrame
                  label="POST"
                  icon={ImageIcon}
                  className="aspect-video w-full"
                />
              )}
              <time
                dateTime={post.date}
                className="font-tech text-xs text-primary"
              >
                {formatPostDate(post.date)}
              </time>
              <h2 className="font-display text-xl font-semibold tracking-tight">
                {post.title}
              </h2>
              {post.excerpt && (
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              )}
              <span className="font-tech text-xs text-primary opacity-80 transition-opacity group-hover:opacity-100">
                READ{" "}
                <ArrowUpRight className="inline h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
