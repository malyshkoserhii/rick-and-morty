import { useContext, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../Button';
import {
  FormContext,
  ErrorContext,
} from '../../../views/LocationView/LocationView';
import s from './LocationFilterForm.module.css';

export default function LocationFilterForm({
  onChangeName,
  onChangeType,
  onChangeDimension,
}) {
  const formValues = useContext(FormContext);
  let { planetName, type, dimension, setPage } = formValues;
  const errorValues = useContext(ErrorContext);
  let { planetName, type, dimension } = formValues;
  const { error } = errorValues;
  console.log(error);
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst) {
      isFirst.current = false;
      return;
    }
    toast.error(error);
  }, [error]);

  const onFormSubmit = event => {
    event.preventDefault();

    if (planetName !== '') {
      onChangeName(planetName);
    }
    if (type !== '') {
      onChangeType(type);
    }
    if (dimension !== '') {
      onChangeDimension(dimension);
    }
  };

  const onResetForm = () => {
    onChangeName('');
    onChangeType('');
    onChangeDimension('');
    setPage(1);

    toast.success('All Locations returned');
  };

  const onInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'planetName':
        planetName = value;
        break;
      case 'type':
        type = value;
        break;
      case 'dimension':
        dimension = value;
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
        <form className={s.Form} onSubmit={onFormSubmit}>
          <label htmlFor="name">
            <input
              id="name"
              name="planetName"
              className={s.Input}
              placeholder="Enter name of the Planet"
              autoComplete="off"
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="type">
            <input
              id="type"
              name="type"
              className={s.Input}
              placeholder="Enter a type of the Place"
              autoComplete="off"
              onChange={onInputChange}
            />
          </label>
          <label htmlFor="dimension">
            <input
              id="dimension"
              name="dimension"
              className={s.Input}
              placeholder="Enter dimension the of the Planet"
              autoComplete="off"
              onChange={onInputChange}
            />
          </label>
          <Button type="submit" text="Search" className={s.Button} />
        </form>
        <Button
          type="button"
          text="Return All Locations"
          className={s.Button}
          onClick={onResetForm}
        />
      </div>
    </>
  );
}

LocationFilterForm.defaultProps = {
  onChangeSpecies: () => {},
  onChangeStatus: () => {},
  onChangeGender: () => {},
};
