import PropTypes from 'prop-types';

const Input = ({
  id,
  type,
  name,
  value,
  className,
  onChange,
  placeholder,
  autoComplete,
}) => {
  return (
    <label htmlFor={id}>
      <input
        id={id}
        type={type}
        value={value}
        name={name}
        className={className}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
    </label>
  );
};

Input.propTypes = {
  id: PropTypes.string || PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
};

Input.defaultProps = {
  id: null,
  type: 'input',
  name: '',
  value: '',
  className: '',
  placeholder: '',
  autoComplete: 'off',
  onChange: () => {},
};

export default Input;
