import PropTypes from 'prop-types';

const Button = ({ type, className, onClick, text, disabled }) => {
  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  className: '',
  onClick: () => {},
  text: 'click',
  disabled: false,
};

export default Button;
