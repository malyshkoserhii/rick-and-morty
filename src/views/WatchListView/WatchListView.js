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

  return (
    <section className={s.Container}>
      <WatchList watchList={watchList}>
        {watchList.map(episode => (
          <WatchListItem
            key={episode.id}
            episode={episode}
            onToggleCheckbox={onToggleCheckbox}
          />
        ))}
      </WatchList>
    </section>
  );
};

export default WatchListView;
