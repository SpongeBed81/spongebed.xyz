import { env } from "$env/dynamic/public";

let fetched;

export async function load({ fetch, url }) {
  if (!fetched) {
    const data = await fetch(
      `https://api.lanyard.rest/v1/users/${env.PUBLIC_DISCORD_ID}`
    );
    fetched = await data.json();
  }

  return { lanyard: fetched.data, url: url.href };
}
