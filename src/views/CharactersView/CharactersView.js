import { useState, createContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import CharacterFilterForm from '../../components/Characters/CharacterFilterForm';
import CharacterContent from '../../components/Characters/CharactersContent';
import PaginationButtons from '../../components/PaginationButtons';

export const FormContext = createContext();
export const ErrorContext = createContext();

export default function CharactersView() {
  const history = useHistory();
  const location = useLocation();
  const initialPage =
    Number(new URLSearchParams(location.search).get('page')) || 1;
  const initialSpecies =
    new URLSearchParams(location.search).get('species') || 'all';
  const initialStatus =
    new URLSearchParams(location.search).get('status') || 'all';
  const initialGender =
    new URLSearchParams(location.search).get('gender') || 'all';
  const [page, setPage] = useState(initialPage);
  const [species, setSpecies] = useState(initialSpecies);
  const [status, setStatus] = useState(initialStatus);
  const [gender, setGender] = useState(initialGender);
  const [totalPages, setTotalPages] = useState(null);
  const [error, setError] = useState('');


  const formValues = {
    species,
    gender,
    status,
    page,
  };

  const errorState = {
    error,
    setError,
  };

  const onPreviousPage = () => {
    setPage(page => page - 1);
  };

  const onNextPage = () => {
    setPage(page => page + 1);
  };

  const onChangePage = () => {
    history.push({
      ...location,
      search: `page=${page}&species=${species}&status=${status}&gender=${gender}`,
    });
  };

  const onChangeSpecies = species => {
    setSpecies(species);
  };

  const onChangeStatus = status => {
    setStatus(status);
  };

  const onChangeGender = gender => {
    setGender(gender);
  };

  return (
    <FormContext.Provider value={formValues}>
      <ErrorContext.Provider value={errorState}>
        <CharacterFilterForm
          value={totalPages}
          onChangeSpecies={onChangeSpecies}
          onChangeStatus={onChangeStatus}
          onChangeGender={onChangeGender}
        />
        <CharacterContent
          page={page}
          onChangePage={onChangePage}
          setTotalPages={setTotalPages}
          setError={setError}
        />
        <PaginationButtons
          page={page}
          totalPages={totalPages}
          onPreviousPage={onPreviousPage}
          onNextPage={onNextPage}
        />
      </ErrorContext.Provider>
    </FormContext.Provider>
  );
}
