import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type = 'text', onChange, id, name, value }) => (
  <input
    id={id}
    name={name}
    onChange={onChange}
    type={type}
    className="input"
    value={value}
  />
);

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value:PropTypes.string.isRequired,
};
