import { useContext, useEffect } from 'react';
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
  setPage,
}) {
  const formValues = useContext(FormContext);
  const errorValues = useContext(ErrorContext);
  const { error } = errorValues;

  const species = ['all', 'human', 'alien', 'unknown'];
  const status = ['all', 'alive', 'dead', 'unknown'];
  const gender = ['all', 'male', 'female', 'genderless', 'unknown'];

  useEffect(() => {
    toast.error(error);
  }, [error]);

  const onFormSubmit = event => {
    event.preventDefault();
  };

  const onChangeSelect = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'species':
        onChangeSpecies(value);
        setPage(1);
        break;
      case 'status':
        onChangeStatus(value);
        setPage(1);
        break;
      case 'gender':
        onChangeGender(value);
        setPage(1);
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
            {species.map((el, idx) => (
              <option key={idx} value={el}>
                {el}
              </option>
            ))}
          </select>

          <p className={s.type}>Status</p>
          <select name="status" onChange={onChangeSelect}>
            <option defaultValue={formValues.status}>
              {formValues.status}
            </option>
            {status.map((el, idx) => (
              <option key={idx} value={el}>
                {el}
              </option>
            ))}
          </select>

          <p className={s.type}>Gender</p>
          <select name="gender" onChange={onChangeSelect}>
            <option defaultValue={formValues.gender}>
              {formValues.gender}
            </option>
            {gender.map((el, idx) => (
              <option key={idx} value={el}>
                {el}
              </option>
            ))}
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
