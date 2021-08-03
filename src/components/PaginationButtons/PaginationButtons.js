import { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import * as apiCharacters from '../../services/rick-morty-character-api';
import Button from './../Button/Button';
import s from './PaginationButtons.module.css';

const PaginationButtons = ({ page, setCharacters, onChangePage }) => {
  const url = useRouteMatch();

  useEffect(() => {
    if (url !== '/') {
      return;
    }

    const chracterPaginationRequest = async page => {
      try {
        await apiCharacters.fetchAllCaharacters(page).then(setCharacters);
      } catch (error) {
        console.log(error);
        return [];
      }
    };

    chracterPaginationRequest(page);
  }, [page, setCharacters, url]);

  return (
    <section className={s.pagination}>
      <div className={s.wrapper}>
        <div className={s.prevBtnWrapper}>
          <Button
            type="submit"
            className={s.button}
            onClick={() => onChangePage(page - 1)}
            text="Prev"
          />
        </div>
        <span className={s.counter}>{page}</span>
        <Button
          type="submit"
          className={s.button}
          onClick={() => onChangePage(page + 1)}
          text="Next"
        />
      </div>
    </section>
  );
};

export default PaginationButtons;
