import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from '../../../views/LocationView/LocationView';
import * as apiRickAndMorty from '../../../services/rick-morty-api';
import LocationList from '../LocationList';

const LocationContent = ({ page, onChangePage, setError }) => {
  const [places, setPlaces] = useState([]);
  const formValues = useContext(FormContext);
  const { planetName, type, dimension } = formValues;

  useEffect(() => {
    const locationRender = async () => {
      try {
        const response = await apiRickAndMorty.fetchLocation(
          page,
          planetName,
          type,
          dimension,
        );
        setPlaces(response.results);
        onChangePage(page);
      } catch (error) {
        setError(error.message);
        console.log(error);
        return [];
      }
    };
    locationRender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, planetName, type, dimension]);

  return <>{places && <LocationList places={places} />}</>;
};

LocationContent.propTypes = {
  page: PropTypes.number,
  onChangePage: PropTypes.func,
};

LocationContent.defaultProps = {
  page: 1,
  onChangePage: () => {},
};

export default LocationContent;
