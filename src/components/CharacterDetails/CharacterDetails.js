import PropTypes from 'prop-types';
import s from './CharacterDetails.module.css';

const CharacterDetails = ({ character }) => {
  return (
    <section className={s.CharcterDetailsSection}>
      <div className={s.ImageWrapper}>
        <img src={character.image} alt={character.name} />
      </div>
      <div className={s.Info}>
        <h2 className={s.Name}>{character.name}</h2>
        <p className={s.Gender}>
          <span className={s.Type}>Gender: </span>
          {character.gender}
        </p>
        <p className>
          <span className={s.Type}>Location: </span>
          {character.location.name}
        </p>
        <p className={s.Species}>
          <span className={s.Type}>Species: </span>
          {character.species}
        </p>
        <p className={s.Status}>
          <span className={s.Type}>Status: </span>
          {character.status}
        </p>
        <p className={s.Status}>
          <span className={s.Type}>Total Epsiodes: </span>
          {character.episode.length}
        </p>
      </div>
    </section>
  );
};

CharacterDetails.propTypes = {
  character: PropTypes.shape({
    created: PropTypes.string,
    episode: PropTypes.arrayOf(PropTypes.string),
    gender: PropTypes.oneOf(['Male', 'Female', 'Genderless', 'unknown']),
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    location: PropTypes.exact({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
    name: PropTypes.string,
    origin: PropTypes.exact({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
    species: PropTypes.string,
    status: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default CharacterDetails;
