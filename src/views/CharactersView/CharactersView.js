import { useState, createContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import CharacterContent from '../../components/CharactersContent';
import PaginationButtons from '../../components/PaginationButtons';

export const PageContext = createContext();

export default function CharactersView() {
  const history = useHistory();
  const location = useLocation();
  const initialPage =
    Number(new URLSearchParams(location.search).get('page')) || 1;
  const [page, setPage] = useState(initialPage);

  const onPreviousPage = () => {
    setPage(page => page - 1);
  };

  const onNextPage = () => {
    setPage(page => page + 1);
  };

  const onChangePage = () => {
    history.push({
      ...location,
      search: `page=${page}`,
    });
  };

  return (
    <PageContext.Provider value={page}>
      <section>
        <CharacterContent onChangePage={onChangePage} />
        <PaginationButtons
          onPreviousPage={onPreviousPage}
          onNextPage={onNextPage}
        />
      </section>
    </PageContext.Provider>
  );
}
