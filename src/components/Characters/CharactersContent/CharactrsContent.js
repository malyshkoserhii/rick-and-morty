import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from '../../../views/CharactersView/CharactersView';
import * as apiRickAndMorty from '../../../services/rick-morty-api';
import CharacterList from '../CharactersList';

export default function CharactersContent({
  page,
  onChangePage,
  setTotalPages,
  setError,
}) {
  const [characters, setCharacters] = useState([]);
  const formValues = useContext(FormContext);

  const { species, status, gender } = formValues;

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
        setTotalPages(response.info.pages);
        onChangePage(page);
      } catch (error) {
        setError(error.message);
        console.log(error);
        return [];
      }
    };
    charactersRender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, species, status, gender]);

  return <>{characters && <CharacterList characters={characters} />}</>;
}

CharactersContent.propTypes = {
  page: PropTypes.number,
  onChangePage: PropTypes.func,
  setTotalPages: PropTypes.func,
};

CharactersContent.defaultProps = {
  page: 1,
  onChangePage: () => {},
  setTotalPages: () => {},
};
