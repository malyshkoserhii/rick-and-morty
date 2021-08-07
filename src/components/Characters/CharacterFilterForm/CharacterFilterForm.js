import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormContext,
  ErrorContext,
} from '../../../views/CharactersView/CharactersView';
import s from './CharacterFilterForm.module.css';

export default function CharacterFilterForm({
  onChangeSpecies,
  onChangeStatus,
  onChangeGender,
}) {
  const formValues = useContext(FormContext);
  const errorValues = useContext(ErrorContext);
  const { error } = errorValues;

  const onFormSubmit = event => {
    event.preventDefault();
    toast.error(error);
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
        <form className={s.FilterForm} onSubmit={onFormSubmit}>
          <p className={s.type}>Species</p>
          <select name="species" onChange={onChangeSelect}>
            <option defaultValue={formValues.species}>
              {formValues.species}
            </option>
            <option value="all">all</option>
            <option value="human">human</option>
            <option value="alien">alien</option>
            <option value="unknown">unknown</option>
          </select>

          <p className={s.type}>Status</p>
          <select name="status" onChange={onChangeSelect}>
            <option defaultValue={formValues.status}>
              {formValues.status}
            </option>
            <option value="all">all</option>
            <option value="alive">alive</option>
            <option value="dead">dead</option>
            <option value="unknown">unknown</option>
          </select>

          <p className={s.type}>Gender</p>
          <select name="gender" onChange={onChangeSelect}>
            <option defaultValue={formValues.gender}>
              {formValues.gender}
            </option>
            <option value="all">all</option>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="genderless ">genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </form>
      </div>
    </>
  );
}

CharacterFilterForm.defaultProps = {
  onChangeSpecies: () => {},
  onChangeStatus: () => {},
  onChangeGender: () => {},
};
