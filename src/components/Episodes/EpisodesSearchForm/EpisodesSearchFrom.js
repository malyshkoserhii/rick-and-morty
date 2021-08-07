
import { useContext } from 'react';
import Form from '../../Form';
import Input from '../../Input';

import { useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../../Button';
import {
  FormContext,
  ErrorContext,
} from '../../../views/EpisodesView/EpisodesView';
import s from './EpisodesSearchFrom.module.css';

export default function EpisodesSearchForm({ onChangeQuery }) {
  let { query, setPage } = useContext(FormContext);
  let query = useContext(FormContext);
  const { error } = useContext(ErrorContext);
  useEffect(() => {
    toast.error(error);
  }, [error]);


  const onFormSubmit = event => {
    event.preventDefault();
    onChangeQuery(query);
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

    setPage(1);
  };

  return (
    <div className={s.Container}>
      <Form className={s.Form} onSubmit={onFormSubmit}>
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
      </Form>
      <Button
        type="button"
        text="Return All Episodes"
        className={s.Button}
        onClick={onReturnAllEpisodes}
    toast.success('All Episodes returned');
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
