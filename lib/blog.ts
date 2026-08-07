import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  image?: string;
  excerpt?: string;
  author: string;
  readTime: string;
};

export type Post = PostMeta & { contentHtml: string };

const DEFAULT_AUTHOR = "Nava Tavasoli";
const WORDS_PER_MINUTE = 200;

function readPostFile(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents);
}

function deriveReadTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}

function deriveExcerpt(content: string): string {
  const plain = content
    .replace(/^#{1,6}\s.*$/gm, "")
    .replace(/[#*_`>]/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .trim();
  const firstPara = plain.split(/\n\s*\n/)[0]?.replace(/\s+/g, " ").trim() ?? "";
  return firstPara.length > 160 ? `${firstPara.slice(0, 160).trim()}…` : firstPara;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md")
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return getAllSlugs()
    .map((slug) => {
      const { data, content } = readPostFile(slug);
      return {
        slug,
        title: (data.title as string) ?? slug,
        date: (data.date as string) ?? "",
        image: data.image as string | undefined,
        excerpt: (data.excerpt as string | undefined) || deriveExcerpt(content),
        author: (data.author as string | undefined) || DEFAULT_AUTHOR,
        readTime: deriveReadTime(content),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const { data, content } = readPostFile(slug);
  const contentHtml = marked.parse(content, { async: false }) as string;

  return {
    slug,
    title: (data.title as string) ?? slug,
    date: (data.date as string) ?? "",
    image: data.image as string | undefined,
    excerpt: data.excerpt as string | undefined,
    author: (data.author as string | undefined) || DEFAULT_AUTHOR,
    readTime: deriveReadTime(content),
    contentHtml,
  };
}
