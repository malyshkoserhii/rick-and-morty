import PropTypes from 'prop-types';

const Form = ({ children, className, onSubmit }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};

Form.defaultProps = {
  className: '',
  onSubmit: () => {},
};

export default Form;
