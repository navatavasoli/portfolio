import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { MediaFrame } from "@/components/site/media-frame";
import { getAllPosts } from "@/lib/blog";
import { formatPostDate } from "@/lib/format-date";
import { SubscribeForm } from "@/components/site/subscribe-form";

export function Blog() {
  const posts = getAllPosts().slice(0, 6);

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
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-2 rounded-lg p-2 duration-75 hover:bg-accent/60 active:bg-accent"
          >
            {post.image ? (
              <div className="relative aspect-video w-full overflow-hidden rounded-sm border border-border">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-all duration-500 group-hover:scale-105"
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
              <h3 className="line-clamp-2 font-display text-xl font-semibold leading-5 tracking-tight">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="font-subtext line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              )}
            </div>
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
