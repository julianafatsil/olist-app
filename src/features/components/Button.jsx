import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, className = '' }) => (
  <button className={`btn ${className}`} type="button" onClick={onClick}>
    {children}
  </button>
);
export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
