import { useState, createContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import EpisodesSearchForm from '../../components/Episodes/EpisodesSearchForm/EpisodesSearchFrom';
import EpisodesContent from '../../components/Episodes/EpisodesContent';
import PaginationButtons from '../../components/PaginationButtons';

export const PageContext = createContext();
export const FormContext = createContext();

export default function EpisodesView() {
  const history = useHistory();
  const location = useLocation();
  const initialPage =
    Number(new URLSearchParams(location.search).get('page')) || 1;
  const [page, setPage] = useState(initialPage);
  const [query, setQuery] = useState('all');

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
      <PageContext.Provider value={page}>
        <FormContext.Provider value={query}>
          <EpisodesSearchForm onChangeQuery={onChangeQuery} />
          <EpisodesContent onChangePage={onChangePage} />
          <PaginationButtons
            onPreviousPage={onPreviousPage}
            onNextPage={onNextPage}
          />
        </FormContext.Provider>
      </PageContext.Provider>
    </>
  );
}
