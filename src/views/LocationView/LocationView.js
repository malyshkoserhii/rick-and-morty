import { useState, createContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import LocationContent from '../../components/Location/LocationContent';
import PaginationButtons from '../../components/PaginationButtons';

export const FormContext = createContext();

export default function LocationView() {
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
    <>
      <LocationContent page={page} onChangePage={onChangePage} />
      <PaginationButtons
        page={page}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
      />
    </>
  );
}
