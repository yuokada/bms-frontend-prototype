const apiUrl = "https://my-json-server.typicode.com/yuokada/bms-json-server/teams";

export async function getAllTeamsData() {
  const res = await fetch(new URL(apiUrl));
  const teams = await res.json();

  return teams;
}
