import { useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../Button';
import {
  FormContext,
  ErrorContext,
} from '../../../views/EpisodesView/EpisodesView';
import s from './EpisodesSearchFrom.module.css';

export default function EpisodesSearchForm({ onChangeQuery, setPage }) {
  let query = useContext(FormContext);
  const { error, setError } = useContext(ErrorContext);

  useEffect(() => {
    toast.error(error);
  }, [error]);

  const onFormSubmit = event => {
    event.preventDefault();
    onChangeQuery(query);
    setPage(1);
  };

  const onInputChange = event => {
    let input = event.currentTarget.value.toLowerCase();

    if (input.trim() === '') {
      input = 'all';
    }

    query = input;
  };

  const onReturnAllEpisodes = () => {
    onChangeQuery('all');
    toast.success('All Episodes returned');
    setPage(1);
    setError(null);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={s.Container}>
        <form className={s.Form} onSubmit={onFormSubmit}>
          <label htmlFor="episodes">
            <input
              id="episodes"
              className={s.Input}
              placeholder="Enter the episode"
              autoComplete="off"
              onChange={onInputChange}
            />
          </label>
          <Button type="submit" text="Search" className={s.Button} />
        </form>
        <Button
          type="button"
          text="Return All Episodes"
          className={s.Button}
          onClick={onReturnAllEpisodes}
        />
      </div>
    </>
  );
}

EpisodesSearchForm.defaultProps = {
  onChangeQuery: () => {},
};
