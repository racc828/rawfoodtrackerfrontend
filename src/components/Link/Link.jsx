import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "../../global/css/buttons.scss";

const Link = ({ className, text, onClick, icon, href }) => {
  if (icon) {
    return (
      <a onClick={onClick} className={classNames(className)} href={href}>
        <i className={`bi bi-${icon}`} />
        {text && <span>{text}</span>}
      </a>
    );
  } else {
    return (
      <a onClick={onClick} className={classNames(className)} href={href}>
        {text}
      </a>
    );
  }
};

export default Link;

Link.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.func,
  href: PropTypes.string,
};
