import dateHandler from "../../lib/dateHandler.js";
import slugify from "$lib/slugify.js";
import { slugFromPath } from "$lib/slugFromPath.js";

export const load = async () => {
  const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

  const allPosts = [];
  for (const [path, resolver] of Object.entries(modules)) {
    let post = await resolver();

    const metaDate = post?.metadata?.date;

    if (metaDate) {
      if (metaDate.includes("|")) {
        const chunk = metaDate.split("|").map((x) => x.trim());
        const date = chunk[0],
          format = chunk[1];

        post.metadata.date = dateHandler(date, format);
      } else {
        post.metadata.date = dateHandler(metaDate);
      }
    }

    post.metadata.slug = slugify(slugFromPath(path));

    allPosts.push(post.metadata);
  }

  return { allPosts };
};
