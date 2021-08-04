import PropTypes from 'prop-types';
import Button from '../../Button';
import s from './EpisodesListItem.module.css';

const EpisodesListItem = ({ episode }) => {
  return (
    <li className={s.EpisodesListItem}>
      <p className={s.Info}>
        <span className={s.Type}>Name: </span>
        <span className={s.Content}> {episode.name}</span>
      </p>
      <p className={s.Info}>
        <span className={s.Type}>Air Date: </span>
        <span className={s.Content}>{episode.air_date}</span>
      </p>
      <p className={s.Info}>
        <span className={s.Type}>Episode: </span>
        <span className={s.Content}> {episode.episode}</span>
      </p>
      <p className={s.Info}>
        <span className={s.Type}>Total characters: </span>
        <span className={s.Content}>{episode.characters.length}</span>
      </p>
      <Button className={s.Button} text="Add to Watch List" />
    </li>
  );
};

EpisodesListItem.propTypes = {
  episode: PropTypes.shape({
    airDate: PropTypes.string,
    characters: PropTypes.arrayOf(PropTypes.string),
    created: PropTypes.string,
    episode: PropTypes.string,
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default EpisodesListItem;