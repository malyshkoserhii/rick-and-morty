import PropTypes from 'prop-types';
import s from './LocationList.module.css';

import LocationListItem from '../LocationListItem';

const LocationList = ({ places }) => {
  return (
    <ul className={s.LocationList}>
      {places.map(place => (
        <LocationListItem key={place.id} place={place} />
      ))}
    </ul>
  );
};

LocationList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      created: PropTypes.string,
      dimension: PropTypes.string,
      id: PropTypes.number.isRequired,
      residents: PropTypes.arrayOf(PropTypes.string),
      type: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

LocationList.defaultProps = {
  places: [],
};

export default LocationList;
