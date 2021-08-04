import { useState, useEffect, useContext } from 'react';
import { PageContext } from '../../views/CharactersView/CharactersView';
import * as apiCharacters from '../../services/rick-morty-character-api';
import CharacterList from '../../components/CharactersList';

export default function CharactersView({ onChangePage }) {
  const [characters, setCharacters] = useState([]);
  const page = useContext(PageContext);

  useEffect(() => {
    const initialCaharactersViewRender = async () => {
      try {
        const response = await apiCharacters.fetchAllCaharacters(page);
        setCharacters(response.results);
        onChangePage(page);
      } catch (error) {
        console.log(error);
        return [];
      }
    };
    initialCaharactersViewRender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <section>{characters && <CharacterList characters={characters} />}</section>
  );
}
