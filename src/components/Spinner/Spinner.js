import Loader from 'react-loader-spinner';
import s from './Spinner.module.css';

const Spinner = () => (
  <div className={s.spinnerWrapper}>
    <Loader
      type="ThreeDots"
      color="#8b008b"
      height={60}
      width={60}
      timeout={2000}
    />
  </div>
);

export default Spinner;
