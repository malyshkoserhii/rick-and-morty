import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

    toast.info(`Episode has been deleted from your Watch List!`);
  };

  return (
    <section className={s.Container}>
      <>
        <WatchList watchList={watchList}>
          {watchList.map(episode => (
            <WatchListItem
              key={episode.id}
              episode={episode}
              onToggleCheckbox={onToggleCheckbox}
              onDeleteEpisode={onDeleteEpisode}
            />
          ))}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </WatchList>
      </>
    </section>
  );
};

export default WatchListView;
