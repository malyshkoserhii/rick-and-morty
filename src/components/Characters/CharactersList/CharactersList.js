import PropTypes from 'prop-types';
import CharactersListItem from '../CharactersListItem';
import s from './CharactersList.module.css';

const CharacterList = ({ characters }) => {
  return (
    <>
      <ul className={s.CharactersList}>
        {characters.map(character => (
          <CharactersListItem key={character.id} character={character} />
        ))}
      </ul>
    </>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
};

CharacterList.defaultProps = {
  characters: [],
};

export default CharacterList;
