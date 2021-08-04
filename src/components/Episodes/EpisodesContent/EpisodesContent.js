import { useEffect, useState, useContext } from 'react';
import { PageContext } from '../../../views/EpisodesView/EpisodesView';
import { FormContext } from '../../../views/EpisodesView/EpisodesView';
import * as apiRickAndMorty from '../../../services/rick-morty-api';
import EpisodesList from '../EpisodesList';

export default function EpisodesContent({ onChangePage }) {
  const [episodes, setEpisodes] = useState([]);
  const page = useContext(PageContext);
  const query = useContext(FormContext);
  // const [error, setError] = useState('');
  // console.log('EpisodesContent', error);

  useEffect(() => {
    const episodesRender = async () => {
      try {
        const response = await apiRickAndMorty.fetchEpisodes(page, query);
        setEpisodes(response.results);
        onChangePage(page);
      } catch (error) {
        // setError(error.message);
        console.log(error);
        return [];
      }
    };
    episodesRender();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query]);

  return (
    <>
      <EpisodesList episodes={episodes} />
    </>
  );
}

EpisodesContent.defaultProps = {
  onChangePage: () => {},
};
