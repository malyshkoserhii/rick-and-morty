import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import CharacterDetails from '../CharacterDetails';
import s from './CharactersListItem.module.css';

const CharactersListItem = ({ character }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onShowModal = () => {
    setIsOpenModal(true);
  };

  const onCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <li className={s.CharactersListItem} onClick={() => onShowModal()}>
        <img
          src={character.image}
          alt={character.name}
          className={s.CharactersListItemImg}
        />

        <p className={s.Name}>{character.name}</p>
      </li>
      {isOpenModal && (
        <Modal onCloseModal={onCloseModal}>
          <CharacterDetails character={character} />
        </Modal>
      )}
    </>
  );
};

CharactersListItem.propTypes = {
  character: PropTypes.shape({
    created: PropTypes.string,
    episode: PropTypes.arrayOf(PropTypes.string),
    gender: PropTypes.oneOf(['Male', 'Female', 'Genderless', 'unknown']),
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    location: PropTypes.exact({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
    name: PropTypes.string,
    origin: PropTypes.exact({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
    species: PropTypes.string,
    status: PropTypes.string,
    type: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default CharactersListItem;
