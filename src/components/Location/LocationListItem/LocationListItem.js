import PropTypes from 'prop-types';
import s from './LocationListItem.module.css';

const LocationListItem = ({ place }) => {
  return (
    <li className={s.LocationListItem}>
      <p>
        <span className={s.Type}>Name: </span>
        <span>{place.name}</span>
      </p>
      <p>
        <span className={s.Type}>Dimension: </span>
        <span>{place.dimension} </span>
      </p>
      <p>
        <span className={s.Type}> Type: </span>
        <span>{place.type}</span>
      </p>
      <p>
        <span className={s.Type}> Total Residents: </span>
        {place.residents.length && <span>{place.residents.length}</span>}
      </p>
    </li>
  );
};

LocationListItem.propTypes = {
  place: PropTypes.shape({
    created: PropTypes.string,
    dimension: PropTypes.string,
    id: PropTypes.number.isRequired,
    residents: PropTypes.arrayOf(PropTypes.string),
    type: PropTypes.string,
    url: PropTypes.string,
  }),
};

LocationListItem.defaultProps = {
  place: {},
};

export default LocationListItem;
