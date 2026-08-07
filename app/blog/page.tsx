import Link from "next/link";
import type { Metadata } from "next";
import { Image as ImageIcon } from "lucide-react";
import { MediaFrame } from "@/components/site/media-frame";
import { getAllPosts } from "@/lib/blog";
import { formatPostDate } from "@/lib/format-date";
import { SubscribeForm } from "@/components/site/subscribe-form";

export const metadata: Metadata = {
  title: "Blog",
  description: "Posts from Nava Tavasoli.",
  alternates: {
    canonical: "https://navatavasoli.com/blog",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="relative mx-auto w-full max-w-5xl px-6 py-28 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 isolate -z-10 overflow-hidden opacity-60"
      >
        <div className="absolute left-0 top-0 h-320 w-140 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,--theme(--color-foreground/.06)_0,hsla(0,0%,55%,.02)_50%,--theme(--color-foreground/.01)_80%)]" />
        <div className="absolute left-0 top-0 h-320 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="absolute left-0 top-0 h-320 w-60 -translate-y-87.5 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,--theme(--color-foreground/.04)_0,--theme(--color-foreground/.01)_80%,transparent_100%)]" />
      </div>

      <div className="mb-10 flex items-center gap-4">
        <Link
          href="/"
          className="font-tech text-xs tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
        >
          ← HOME
        </Link>
      </div>

      <div className="mb-10 space-y-1">
        <h1 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Blog
        </h1>
        <p className="text-base text-muted-foreground">
          Notes on what I&apos;m building, reading, and thinking about.
        </p>
      </div>

      <SubscribeForm className="mb-10 max-w-md" />

      {posts.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No posts yet — check back soon.
        </p>
      ) : (
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-2 rounded-lg p-2 duration-75 hover:bg-accent/60 active:bg-accent"
            >
              {post.image ? (
                <div className="aspect-video w-full overflow-hidden rounded-sm border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt=""
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <MediaFrame
                  label="POST"
                  icon={ImageIcon}
                  className="aspect-video w-full"
                />
              )}
              <div className="space-y-2 px-2 pb-2">
                <div className="flex items-center gap-2 font-tech text-[11px] text-muted-foreground sm:text-xs">
                  <p>{post.author}</p>
                  <div className="size-1 rounded-full bg-muted-foreground" />
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  <div className="size-1 rounded-full bg-muted-foreground" />
                  <p>{post.readTime}</p>
                </div>
                <h2 className="line-clamp-2 font-display text-lg font-semibold leading-5 tracking-tight">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="line-clamp-3 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
