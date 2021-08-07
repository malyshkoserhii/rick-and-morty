import PropTypes from 'prop-types';
import s from './WatchListItem.module.css';

export default function WatchListItem({ episode, onToggleCheckbox }) {
  return (
    <li className={s.EpisodesListItem}>
      <input
        className={s.Checkbox}
        type="checkbox"
        checked={episode.watched}
        onChange={() => {
          onToggleCheckbox(episode.id);
        }}
      />
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
        {episode.characters.length && (
          <span className={s.Content}>{episode.characters.length}</span>
        )}
      </p>
    </li>
  );
}

WatchListItem.propTypes = {
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

WatchListItem.defaultProps = {
  episode: [],
  onToggleCheckbox: () => {},
};
