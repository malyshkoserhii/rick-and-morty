const BASE_URL = 'https://rickandmortyapi.com/api/character';

export async function fetchAllCaharacters(page, species, status, gender) {
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
    `${BASE_URL}?page=${page}&species=${species}&status=${status}&gender=${gender}`,
  );

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not Found From Promise Reject'));
}
