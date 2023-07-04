export async function handle({ event, resolve }) {
  event.locals.lanyard = await getLanyard();

  return await resolve(event);
}

async function getLanyard() {
  const response = await fetch(
    `https://api.lanyard.rest/v1/users/407486004505870336`
  );

  const data = await response.json();

  return data;
}
