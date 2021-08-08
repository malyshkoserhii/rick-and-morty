import { useContext } from 'react';
import { WatchListContext } from '../../App';
import shortid from 'shortid';
import WatchList from '../../components/Watch/WatchList';
import WatchListItem from '../../components/Watch/WatchListItem';
import s from './WatchListView.module.css';

const WatchListView = () => {
  const watchListContextValues = useContext(WatchListContext);
  const { watchList, setWatchList } = watchListContextValues;

  const onToggleCheckbox = uniqueId => {
    setWatchList(state => {
      return state.map(episode => {
        if (episode.uniqueId === uniqueId) {
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

  const onDeleteEpisode = uniqueId => {
    setWatchList(state => state.filter(el => uniqueId !== el.uniqueId));
  };

  return (
    <section className={s.Container}>
      <>
        {watchList.length === 0 ? (
          <p className={s.Notification}>
            {' '}
            You have not added Episodes in your Watch List yet{' '}
          </p>
        ) : (
          <WatchList watchList={watchList}>
            {watchList.map(episode => (
              <WatchListItem
                key={shortid.generate()}
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
