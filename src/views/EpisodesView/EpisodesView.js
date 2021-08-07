import { useState, createContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import EpisodesSearchForm from '../../components/Episodes/EpisodesSearchForm/EpisodesSearchForm';
import EpisodesContent from '../../components/Episodes/EpisodesContent';
import PaginationButtons from '../../components/PaginationButtons';

export const FormContext = createContext();
export const ErrorContext = createContext();

export default function EpisodesView() {
  const history = useHistory();
  const location = useLocation();
  const initialPage =
    Number(new URLSearchParams(location.search).get('page')) || 1;
  const [page, setPage] = useState(initialPage);
  const [query, setQuery] = useState('all');
  const [totalPages, setTotalPages] = useState(null);
  const [error, setError] = useState(null);

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
      search: `page=${page}&query=${query}`,
    });
  };

  const onChangeQuery = query => {
    setQuery(query);
  };

  return (
    <>
      <FormContext.Provider value={query}>
        <ErrorContext.Provider value={errorState}>
          <EpisodesSearchForm onChangeQuery={onChangeQuery} setPage={setPage} />
          <EpisodesContent
            page={page}
            onChangePage={onChangePage}
            setError={setError}
            setTotalPages={setTotalPages}
          />
          <PaginationButtons
            page={page}
            totalPages={totalPages}
            onPreviousPage={onPreviousPage}
            onNextPage={onNextPage}
          />
        </ErrorContext.Provider>
      </FormContext.Provider>
    </>
  );
}
