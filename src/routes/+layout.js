let fetched;

export async function load({ fetch, url }) {
  if (!fetched) {
    const data = await fetch(
      "https://api.lanyard.rest/v1/users/407486004505870336"
    );
    const json = await data.json();
    fetched = json;
  }
  return { lanyard: fetched, url: url.href };
}
