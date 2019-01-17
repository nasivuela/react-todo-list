import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, children }) => 
  <button className={className} onClick={onClick}>{children}</button>;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default Button;
