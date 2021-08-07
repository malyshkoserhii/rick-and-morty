import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import Button from './../Button/Button';
import s from './PaginationButtons.module.css';

const PaginationButtons = ({
  page,
  totalPages,
  onPreviousPage,
  onNextPage,
}) => {
  return !totalPages ? (
    <Spinner />
  ) : (
    <section className={s.pagination}>
      <div className={s.wrapper}>
        <div className={s.prevBtnWrapper}>
          {page > 1 && (
            <Button
              className={s.button}
              onClick={() => onPreviousPage(page)}
              text="Prev"
            />
          )}
        </div>
        <span className={s.counter}>{page}</span>
        {page < totalPages && (
          <Button
            className={s.button}
            onClick={() => onNextPage(page)}
            text="Next"
          />
        )}
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
