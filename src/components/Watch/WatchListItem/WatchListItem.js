import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../Button';
import s from './WatchListItem.module.css';

export default function WatchListItem({
  episode,
  onToggleCheckbox,
  onDeleteEpisode,
}) {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <li className={s.EpisodesListItem}>
        <input
          className={s.Checkbox}
          type="checkbox"
          checked={episode.watched}
          onChange={() => {
            onToggleCheckbox(episode.uniqueId);
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
        <Button
          key={episode.id + 50}
          className={s.Button}
          text="Delete Episode"
          onClick={() => {
            onDeleteEpisode(episode.uniqueId);
            toast.info(`Episode has been deleted from your Watch List!`);
          }}
        />
      </li>
    </>
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
  onToggleCheckbox: PropTypes.func,
};

WatchListItem.defaultProps = {
  episode: [],
  onToggleCheckbox: () => {},
  onDeleteEpisode: () => {},
};
