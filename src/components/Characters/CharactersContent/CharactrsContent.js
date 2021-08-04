import { useState, useEffect, useContext } from 'react';
import { PageContext } from '../../../views/CharactersView/CharactersView';
import { FormContext } from '../../../views/CharactersView/CharactersView';
import * as apiCharacters from '../../../services/rick-morty-character-api';
import CharacterList from '../CharactersList';

export default function CharactersContent({ onChangePage }) {
  const [characters, setCharacters] = useState([]);
  const page = useContext(PageContext);
  const formValues = useContext(FormContext);
  const species = formValues.species;
  const status = formValues.status;
  const gender = formValues.gender;

  useEffect(() => {
    const initialCaharactersViewRender = async () => {
      try {
        const response = await apiCharacters.fetchAllCaharacters(
          page,
          species,
          status,
          gender,
        );
        setCharacters(response.results);
        onChangePage(page);
      } catch (error) {
        console.log(error);
        return [];
      }
    };
    initialCaharactersViewRender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, species, status, gender]);

  return (
    <section>{characters && <CharacterList characters={characters} />}</section>
  );
}
