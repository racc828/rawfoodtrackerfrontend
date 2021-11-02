import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "../../global/css/buttons.scss";

const Button = ({ className, text, type, onClick, id, icon }) => {
  const buttonType = type ? type : "button";

  if (icon) {
    return (
      <button
        type={buttonType}
        onClick={onClick}
        type={type}
        className={classNames(className)}
        data-id={id}
      >
        <i className={`bi bi-${icon}`} />
        {text}
      </button>
    );
  } else {
    return (
      <button
        type={buttonType}
        onClick={onClick}
        type={type}
        className={classNames(className)}
        data-id={id}
      >
        {text}
      </button>
    );
  }
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.number,
  icon: PropTypes.func,
};
