export async function load({ fetch, url }) {
 const data = await fetch("https://api.lanyard.rest/v1/users/407486004505870336")
 const json = await data.json()
 return { lanyard: json, url: url.href }
}