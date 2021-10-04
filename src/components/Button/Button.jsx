import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "../../global/css/buttons.scss";

const Button = ({ className, text, type, onClick }) => {
  const buttonType = type ? type : "button";
  return (
    <button
      type={buttonType}
      onClick={onClick}
      type={type}
      className={classNames(className)}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};