import Link from "next/link";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { MediaFrame } from "@/components/site/media-frame";
import { getAllPosts } from "@/lib/blog";
import { formatPostDate } from "@/lib/format-date";
import { SubscribeForm } from "@/components/site/subscribe-form";

export function Blog() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        <p className="text-sm text-muted-foreground">
          No posts yet — check back soon.
        </p>
        <SubscribeForm className="max-w-sm" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-5 md:grid-cols-3">
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
            <h3 className="font-display text-xl font-semibold tracking-tight">
              {post.title}
            </h3>
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
      <div className="flex flex-col items-start gap-4">
        <Link
          href="/blog"
          className="group inline-flex w-fit items-center gap-1 font-tech text-xs text-muted-foreground opacity-80 transition-opacity hover:text-foreground hover:opacity-100"
        >
          VIEW ALL POSTS{" "}
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <SubscribeForm className="w-full max-w-sm" />
      </div>
    </div>
  );
}
