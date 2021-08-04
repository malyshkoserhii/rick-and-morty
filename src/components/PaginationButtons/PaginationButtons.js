import { useContext } from 'react';
import { PageContext } from '../../views/CharactersView/CharactersView';
import Button from './../Button/Button';
import s from './PaginationButtons.module.css';

const PaginationButtons = ({ onPreviousPage, onNextPage }) => {
  const page = useContext(PageContext);

  return (
    <section className={s.pagination}>
      <div className={s.wrapper}>
        <div className={s.prevBtnWrapper}>
          <Button
            type="submit"
            className={s.button}
            onClick={() => onPreviousPage(page)}
            text="Prev"
          />
        </div>
        <span className={s.counter}>{page}</span>
        <Button
          type="submit"
          className={s.button}
          onClick={() => onNextPage(page)}
          text="Next"
        />
      </div>
    </section>
  );
};

export default PaginationButtons;
