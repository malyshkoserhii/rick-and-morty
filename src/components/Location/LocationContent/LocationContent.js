import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as apiRickAndMorty from '../../../services/rick-morty-api';
import LocationList from '../LocationList';

const LocationContent = ({ page, onChangePage }) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const locationRender = async () => {
      try {
        const response = await apiRickAndMorty.fetchLocation(page);
        setPlaces(response.results);
        onChangePage(page);
      } catch (error) {
        console.log(error);
        return [];
      }
    };
    locationRender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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
