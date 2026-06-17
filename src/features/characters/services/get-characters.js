export const getCharacters = async ({ page = 1, name = '', status = '', gender = '' } = {}) => {
  const url = new URL('https://rickandmortyapi.com/api/character');
  
  url.searchParams.append('page', page);
  if (name.trim()) url.searchParams.append('name', name.trim());
  if (status) url.searchParams.append('status', status);
  if (gender) url.searchParams.append('gender', gender);

  const res = await fetch(url.toString());

  if (!res.ok) {
    if (res.status === 404) {
      return {
        results: [],
        info: { count: 0, pages: 1, next: null, prev: null }
      };
    }
    throw new Error('Error al obtener personajes');
  }

  return res.json();
};
