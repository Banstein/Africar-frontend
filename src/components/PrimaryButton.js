/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

const PrimaryButton = ({ children, onClick, btnType = 'button' }) => (
  <button
    type={btnType}
    className='px-6 py-3 font-bold text-white uppercase transition-colors bg-amber-500 hover:bg-amber-600 rounded-xl'
    onClick={onClick}
  >
    {children}
  </button>
);

PrimaryButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  btnType: PropTypes.string,
};
PrimaryButton.defaultProps = { children: '', onClick: null, btnType: 'button' };
export default PrimaryButton;
