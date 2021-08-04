import { useContext } from 'react';
import Button from '../../Button';
import { FormContext } from '../../../views/EpisodesView/EpisodesView';
import s from './EpisodesSearchFrom.module.css';

export default function EpisodesSearchForm({ onChangeQuery }) {
  let query = useContext(FormContext);

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
  };

  return (
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
  );
}

EpisodesSearchForm.defaultProps = {
  onChangeQuery: () => {},
};
