import { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { FormContext } from '../../../views/EpisodesView/EpisodesView';
import * as apiRickAndMorty from '../../../services/rick-morty-api';
import EpisodesList from '../EpisodesList';

export default function EpisodesContent({
  page,
  onChangePage,
  setTotalPages,
  setError,
}) {
  const [episodes, setEpisodes] = useState([]);
  const query = useContext(FormContext);

  useEffect(() => {
    const episodesRender = async () => {
      try {
        const response = await apiRickAndMorty.fetchEpisodes(page, query);
        setEpisodes(response.results);
        onChangePage(page);
        setTotalPages(response.info.pages);
      } catch (error) {
        setError(error.message);
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

EpisodesContent.propTypes = {
  page: PropTypes.number,
  onChangePage: PropTypes.func,
  setTotalPages: PropTypes.func,
};

EpisodesContent.defaultProps = {
  page: 1,
  onChangePage: () => {},
  setTotalPages: () => {},
};
