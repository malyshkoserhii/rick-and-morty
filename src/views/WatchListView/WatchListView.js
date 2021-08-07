import { useContext } from 'react';
import { WatchListContext } from '../../App';
import WatchList from '../../components/Watch/WatchList';
import WatchListItem from '../../components/Watch/WatchListItem';
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
          return updatedEpisode;
        }

        return episode;
      });
    });
  };

  const onDeleteEpisode = id => {
    setWatchList(state => state.filter(el => id !== el.id));
  };

  return (
    <section className={s.Container}>
      <>
        {watchList.length === 0 ? (
          <p className={s.Notification}>
            {' '}
            You have not still added Episodes in your Watch Lists{' '}
          </p>
        ) : (
          <WatchList watchList={watchList}>
            {watchList.map(episode => (
              <WatchListItem
                key={episode.id}
                episode={episode}
                onToggleCheckbox={onToggleCheckbox}
                onDeleteEpisode={onDeleteEpisode}
              />
            ))}
          </WatchList>
        )}
      </>
    </section>
  );
};

export default WatchListView;
