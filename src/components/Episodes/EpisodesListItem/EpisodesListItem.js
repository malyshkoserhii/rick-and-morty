import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import Button from '../../Button';
import { WatchListContext } from '../../../App';

import s from './EpisodesListItem.module.css';

const EpisodesListItem = ({ episode }) => {
  const contextValues = useContext(WatchListContext);
  const { setWatchList } = contextValues;

  const onAddToWatched = episode => {
    const newEpisode = {
      watched: false,
      ...episode,
    };

    setWatchList(state => [newEpisode, ...state]);
  };

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
        <Button
          className={s.Button}
          text="Add to Watch List"
          onClick={() => {
            onAddToWatched(episode);
            toast.info(
              `Episode ${episode.name} (${episode.episode}) has been added to your Watch List!`,
            );
          }}
        />
      </li>
    </>
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

EpisodesListItem.defaultProps = {
  episode: [],
};

export default EpisodesListItem;
