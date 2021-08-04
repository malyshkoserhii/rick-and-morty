import { useContext } from 'react';
import { FormContext } from '../../../views/CharactersView/CharactersView';
import s from './CharacterFilterForm.module.css';

export default function FilterForm({
  onChangeSpecies,
  onChangeStatus,
  onChangeGender,
}) {
  const formValues = useContext(FormContext);

  const onFormSubmit = event => {
    event.preventDefault();
  };

  const onChangeSelect = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'species':
        onChangeSpecies(value);
        break;
      case 'status':
        onChangeStatus(value);
        break;
      case 'gender':
        onChangeGender(value);
        break;
      default:
        return;
    }
  };

  return (
    <div className={s.Container}>
      <form className={s.FilterForm} onSubmit={onFormSubmit}>
        <p className={s.type}>Species</p>
        <select name="species" onChange={onChangeSelect}>
          <option defaultValue={formValues.species}>
            {formValues.species}
          </option>
          <option value="human">human</option>
          <option value="alien">alien</option>
          <option value="unknown">unknown</option>
        </select>

        <p className={s.type}>Status</p>
        <select name="status" onChange={onChangeSelect}>
          <option defaultValue={formValues.status}>{formValues.status}</option>
          <option value="alive">alive</option>
          <option value="dead">dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <p className={s.type}>Gender</p>
        <select name="gender" onChange={onChangeSelect}>
          <option defaultValue={formValues.gender}>{formValues.gender}</option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="genderless ">genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </form>
    </div>
  );
}
