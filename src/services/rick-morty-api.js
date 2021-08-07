const BASE_CHARACTER_URL = 'https://rickandmortyapi.com/api/character';
const BASE_EPISODES_URL = 'https://rickandmortyapi.com/api/episode';
const BASE_LOCATION_URL = 'https://rickandmortyapi.com/api/location';

export async function fetchCharacters(page, species, status, gender) {
  if (species === 'all') {
    species = '';
  }
  if (status === 'all') {
    status = '';
  }
  if (gender === 'all') {
    gender = '';
  }

  const response = await fetch(
    `${BASE_CHARACTER_URL}?page=${page}&species=${species}&status=${status}&gender=${gender}`,
  );

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found From Promise Reject'));
}

export async function fetchEpisodes(page, query) {
  if (query === 'all') {
    query = '';
  }

  const response = await fetch(
    `${BASE_EPISODES_URL}?page=${page}&name=${query}`,
  );

  return response.ok
    ? await response.json()
    : Promise.reject(new Error(`Episode ${query} not found`));
}

export async function fetchLocation(page) {
  const response = await fetch(`${BASE_LOCATION_URL}?page=${page}`);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error(`Episode ${BASE_LOCATION_URL} not found`));
}
