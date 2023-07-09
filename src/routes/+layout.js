let fetched;

export async function load({ fetch, url }) {
  if (!fetched) {
    const data = await fetch(
      "https://api.lanyard.rest/v1/users/407486004505870336"
    );
    fetched = await data.json();
  }

  return { lanyard: fetched.data, url: url.href };
}
