import { useContext } from 'react';
import Button from '../../Button';
import { FormContext } from '../../../views/EpisodesView/EpisodesView';
import s from './EpisodesSearchFrom.module.css';

export default function EpisodesSearchForm({ onChangeQuery }) {
  const query = useContext(FormContext);

  const onFormSubmit = event => {
    event.preventDefault();
    onChangeQuery(query);
  };

  const onInputChange = event => {
    const input = event.currentTarget.value.toLowerCase();

    if (input === '') {
      return;
    }

    onChangeQuery(input);
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
        <Button type="submit" text="Search" />
      </form>
    </div>
  );
}

EpisodesSearchForm.defaultProps = {
  onChangeQuery: () => {},
};
