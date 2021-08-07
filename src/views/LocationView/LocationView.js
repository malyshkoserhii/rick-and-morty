import { useState, createContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import LocationFilterForm from '../../components/Location/LocationFilterForm';
import LocationContent from '../../components/Location/LocationContent';
import PaginationButtons from '../../components/PaginationButtons';

export const FormContext = createContext();
export const ErrorContext = createContext();

export default function LocationView() {
  const history = useHistory();
  const location = useLocation();
  const initialPage =
    Number(new URLSearchParams(location.search).get('page')) || 1;
  const initialName = new URLSearchParams(location.search).get('name') || 'all';
  const initialType = new URLSearchParams(location.search).get('type') || 'all';
  const initialDimension =
    new URLSearchParams(location.search).get('dimension') || 'all';
  const [page, setPage] = useState(initialPage);
  const [planetName, setPlanetName] = useState(initialName);
  const [type, setType] = useState(initialType);
  const [dimension, setDimension] = useState(initialDimension);
  const [totalPages, setTotalPages] = useState(null);
  const [error, setError] = useState('');

  const formValues = {
    planetName,
    type,
    dimension,
    setPage,
  };

  const errorValues = {
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
      search: `page=${page}&name=${planetName}&type=${type}&dimension=${dimension}`,
    });
  };

  const onChangeName = planetName => {
    setPlanetName(planetName);
  };

  const onChangeType = type => {
    setType(type);
  };

  const onChangeDimension = dimension => {
    setDimension(dimension);
  };

  return (
    <FormContext.Provider value={formValues}>
      <LocationFilterForm
        onChangeName={onChangeName}
        onChangeType={onChangeType}
        onChangeDimension={onChangeDimension}
      />
      <LocationContent
        page={page}
        onChangePage={onChangePage}
        setTotalPages={setTotalPages}
      />
      <PaginationButtons
        page={page}
        totalPages={totalPages}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
      />
      <ErrorContext.Provider value={errorValues}>
        <LocationFilterForm
          onChangeName={onChangeName}
          onChangeType={onChangeType}
          onChangeDimension={onChangeDimension}
        />
        <LocationContent
          page={page}
          onChangePage={onChangePage}
          setError={setError}
        />
        <PaginationButtons
          page={page}
          onPreviousPage={onPreviousPage}
          onNextPage={onNextPage}
        />
      </ErrorContext.Provider>
    </FormContext.Provider>
  );
}
