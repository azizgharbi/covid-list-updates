const GET_ALL_UPDATE = "https://corona.lmao.ninja/all";
const GET_STATS_BY_COUNTRIES = "https://corona.lmao.ninja/countries";

export async function getAllStats() {
  const data = await fetch(GET_ALL_UPDATE);
  return await await data.json();
}

export async function getAllStatsByCountries() {
  const data = await fetch(GET_STATS_BY_COUNTRIES);
  return await await data.json();
}
