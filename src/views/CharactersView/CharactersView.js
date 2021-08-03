import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import * as apiCharacters from '../../services/rick-morty-character-api';
import CharacterList from '../../components/CharactersList';
import PaginationButtons from '../../components/PaginationButtons';

export default function CharactersView() {
  const [characters, setCharacters] = useState([]);

  const history = useHistory();
  const location = useLocation();
  const page = Number(new URLSearchParams(location.search).get('page')) || 1;

  useEffect(() => {
    const initialCaharactersViewRender = async () => {
      try {
        const response = await apiCharacters.fetchAllCaharacters(page);
        setCharacters(response.results);
      } catch (error) {
        console.log(error);
        return [];
      }
    };
    initialCaharactersViewRender();
  }, [page]);

  const onChangePage = page => {
    history.push({
      ...location,
      search: `page=${page}`,
    });
  };

  return (
    <section>
      {characters && <CharacterList characters={characters} />}
      <PaginationButtons
        page={page}
        onChangePage={onChangePage}
        setCharacters={setCharacters}
      />
    </section>
  );
}
