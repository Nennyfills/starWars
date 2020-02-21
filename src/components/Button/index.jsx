import React from 'react';
import PropTypes from 'prop-types';

/*
  Button Component
  @param {string} name
  @param {func} handleClick
  @param {func} button
  @returns button element
 */
const Button = ({
  name, handleClick, button, disabled,
}) => (
  <input className={button} type="button" disabled={disabled} value={name} onClick={handleClick} />
);

Button.propTypes = {
  name: PropTypes.string,
  button: PropTypes.string,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  name: '',
  button: '',
  handleClick: () => '',
  disabled: false,
};

export default Button;
