import { useEffect, useState } from 'react';
// import WatchListItem from '../../components/WatchList/WatchListItem';
import s from './WatchListView.module.css';

const WatchListView = () => {
  const [storedEpisodes, setStoredEpisodes] = useState(() => {
    const recordedEpisode = window.localStorage.getItem('episodes');
    return JSON.parse(recordedEpisode) ?? [];
  });

  useEffect(() => {
    window.localStorage.setItem('episodes', JSON.stringify(storedEpisodes));
  }, [storedEpisodes]);

  const onToggleCheckbox = id => {
    setStoredEpisodes(state => {
      return state.map(episode => {
        if (episode.id === id) {
          const updatedEpisode = {
            ...episode,
            watched: !episode.watched,
          };
          return updatedEpisode;
        }

        return storedEpisodes;
      });
    });
  };

  return (
    <section className={s.Container}>
      <ul className={s.WatchListView}>
        {storedEpisodes.map(episode => (
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
              {episode.characters.length && (
                <span className={s.Content}>{episode.characters.length}</span>
              )}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WatchListView;
