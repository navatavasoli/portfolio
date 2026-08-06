# Writing a blog post

1. Create a new file here: `content/blog/your-post-slug.md`
   The filename (minus `.md`) becomes the URL: `/blog/your-post-slug`.

2. Add frontmatter at the top, then write the post in Markdown below it:

   ```md
   ---
   title: "Post Title"
   date: "2026-08-06"
   image: "/blog/your-post-slug/cover.jpg"
   excerpt: "One or two sentences shown on the blog list page."
   ---

   Your post content, in Markdown.
   ```

   - `title` and `date` (YYYY-MM-DD) are required.
   - `image` is optional — a picture shown on the post and its preview card.
   - `excerpt` is optional — if omitted, one is auto-generated from your first paragraph.

3. If you're adding a picture, drop the image file in `public/blog/` (e.g.
   `public/blog/your-post-slug/cover.jpg`) and reference it in `image` with a
   leading `/`, as above.

4. Commit and redeploy. The post appears automatically — newest first — on
   the homepage Blog section and at `/blog`. No code changes needed.

Delete a post by deleting its `.md` file (and its image folder, if any).
