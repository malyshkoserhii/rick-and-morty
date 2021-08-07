import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import shortid from 'shortid';
import EpisodesListItem from '../EpisodesListItem';
import s from './EpisodesList.module.css';

const EpisodesList = ({ episodes }) => {
  return (
    <>
      <ul className={s.EpisodesList}>
        {episodes.map(episode => (
          <EpisodesListItem key={shortid.generate()} episode={episode} />
        ))}
      </ul>
    </>
  );
};

EpisodesList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
};

EpisodesList.defaultProps = {
  characters: [],
};

export default EpisodesList;
