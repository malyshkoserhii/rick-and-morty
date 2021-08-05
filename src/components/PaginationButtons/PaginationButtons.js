import PropTypes from 'prop-types';
import Button from './../Button/Button';
import s from './PaginationButtons.module.css';

const PaginationButtons = ({ page, onPreviousPage, onNextPage }) => {
  return (
    <section className={s.pagination}>
      <div className={s.wrapper}>
        <div className={s.prevBtnWrapper}>
          {page > 1 && (
            <Button
              type="submit"
              className={s.button}
              onClick={() => onPreviousPage(page)}
              text="Prev"
            />
          )}
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

PaginationButtons.propTypes = {
  page: PropTypes.number,
  onPreviousPage: PropTypes.func,
  onNextPage: PropTypes.func,
};

PaginationButtons.defaultProps = {
  page: 1,
  onPreviousPage: () => {},
  onNextPage: () => {},
};

export default PaginationButtons;
