/** @type {import('@sveltejs/kit/types').ServerLoad} */
export const load = async ({ locals, url }) => {
  return {
    lanyard: locals.lanyard,
    url: url.href,
  };
};
