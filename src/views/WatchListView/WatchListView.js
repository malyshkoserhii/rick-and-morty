import { useContext } from 'react';
import { WatchListContext } from '../../App';
import s from './WatchListView.module.css';

const WatchListView = () => {
  const watchListContextValues = useContext(WatchListContext);
  const { watchList, setWatchList } = watchListContextValues;

  const onToggleCheckbox = id => {
    setWatchList(state => {
      return state.map(episode => {
        if (episode.id === id) {
          const updatedEpisode = {
            ...episode,
            watched: !episode.watched,
          };

          return [...state, updatedEpisode];
        }
        console.log('state', state);

        // return state;
      });
    });
  };

  return (
    <section className={s.Container}>
      <ul className={s.WatchListView}>
        {watchList.map(episode => (
          <li key={episode.id} className={s.EpisodesListItem}>
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
              {/* {episode.characters.length && (
                <span className={s.Content}>{episode.characters.length}</span>
              )} */}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WatchListView;
