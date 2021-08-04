import { useState, useEffect, useContext } from 'react';
import { PageContext } from '../../../views/CharactersView/CharactersView';
import { FormContext } from '../../../views/CharactersView/CharactersView';
import * as apiRickAndMorty from '../../../services/rick-morty-api';
import CharacterList from '../CharactersList';

export default function CharactersContent({ onChangePage }) {
  const [characters, setCharacters] = useState([]);
  const page = useContext(PageContext);
  const formValues = useContext(FormContext);
  const species = formValues.species;
  const status = formValues.status;
  const gender = formValues.gender;

  useEffect(() => {
    const charactersRender = async () => {
      try {
        const response = await apiRickAndMorty.fetchCharacters(
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
    charactersRender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, species, status, gender]);

  return (
    <section>{characters && <CharacterList characters={characters} />}</section>
  );
}
