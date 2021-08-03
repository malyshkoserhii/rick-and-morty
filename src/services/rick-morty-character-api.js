const BASE_URL = 'https://rickandmortyapi.com/api/character';

export async function fetchAllCaharacters(page) {
  const response = await fetch(`${BASE_URL}?page=${page}`);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found From Promise Reject'));
}
