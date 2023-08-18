import { slugFromPath } from "$lib/slugFromPath.js";
import dateHandler from "$lib/dateHandler.js";
import { error } from "@sveltejs/kit";
import slugify from "$lib/slugify.js";

export const load = async ({ params }) => {
  const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

  let match = {};

  for (const [path, resolver] of Object.entries(modules)) {
    if (
      slugify(slugFromPath(path)).replaceAll("-", "") ===
      slugify(params.slug).replaceAll("-", "")
    ) {
      match = { path, resolver: resolver };
      break;
    }
  }

  const post = await match?.resolver?.();

  if (!post) {
    throw error(404);
  }

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

  return {
    component: post.default,
    metadata: post.metadata,
  };
};
