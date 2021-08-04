import { useState, createContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import CharacterFilterForm from '../../components/Characters/CharacterFilterForm';
import CharacterContent from '../../components/Characters/CharactersContent';
import PaginationButtons from '../../components/PaginationButtons';

export const PageContext = createContext();
export const FormContext = createContext();

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

  const formValues = {
    species,
    gender,
    status,
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
    <PageContext.Provider value={page}>
      <FormContext.Provider value={formValues}>
        <section>
          <CharacterFilterForm
            onChangeSpecies={onChangeSpecies}
            onChangeStatus={onChangeStatus}
            onChangeGender={onChangeGender}
          />
          <CharacterContent onChangePage={onChangePage} />
          <PaginationButtons
            onPreviousPage={onPreviousPage}
            onNextPage={onNextPage}
          />
        </section>
      </FormContext.Provider>
    </PageContext.Provider>
  );
}
