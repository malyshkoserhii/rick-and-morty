import { useEffect, useState } from 'react';
import * as apiRickAndMorty from '../../../services/rick-morty-api';
import EpisodesList from '../EpisodesList';

export default function EpisodesContent() {
  const [episodes, setEpisodes] = useState([]);
  console.log(episodes);

  useEffect(() => {
    const episodesRender = async () => {
      try {
        const response = await apiRickAndMorty.fetchEpisodes();
        setEpisodes(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    episodesRender();
  }, []);

  return (
    <>
      <div>EpisodesContent</div>
      <EpisodesList episodes={episodes} />
    </>
  );
}
