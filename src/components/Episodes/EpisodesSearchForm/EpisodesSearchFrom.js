import { useContext } from 'react';
import Form from '../../Form';
import Input from '../../Input';
import Button from '../../Button';
import { FormContext } from '../../../views/EpisodesView/EpisodesView';
import s from './EpisodesSearchFrom.module.css';

export default function EpisodesSearchForm({ onChangeQuery }) {
  let { query, setPage } = useContext(FormContext);

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
        <Input
          id="episodes"
          className={s.Input}
          placeholder="Enter the episode"
          autoComplete="off"
          onChange={onInputChange}
        />
        {/* <label htmlFor="episodes">
          <input
            id="episodes"
            className={s.Input}
            placeholder="Enter the episode"
            autoComplete="off"
            onChange={onInputChange}
          />
        </label> */}
        <Button type="submit" text="Search" className={s.Button} />
      </Form>
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
