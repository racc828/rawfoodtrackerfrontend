import React from "react";
import PropTypes from "prop-types";
import "../../global/css/buttons.scss";
import Button from "../Button/Button";

const Header = ({
  currentUser,
  admin,
  toggleProteinForm,
  logOut,
  toggleMeatForm,
  togglePetForm,
}) => {
  return (
    <header className="header mb-4">
      <div className="header-left">{currentUser.firstname}</div>
      <div className="header-right">
        {admin && (
          <React.Fragment>
            <Button
              text="Add Protein"
              onClick={toggleProteinForm}
              className="button button-secondary"
            ></Button>
            <Button
              text="Add Meat"
              onClick={toggleMeatForm}
              className="button button-secondary"
            ></Button>
          </React.Fragment>
        )}
        <Button
          text="Add Pet"
          onClick={togglePetForm}
          className="button button-secondary"
        ></Button>
        <Button
          text="Logout"
          onClick={logOut}
          className="button button-primary"
        ></Button>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  currentUser: PropTypes.object,
  admin: PropTypes.bool,
  toggleProteinForm: PropTypes.func,
  logOut: PropTypes.func,
  toggleMeatForm: PropTypes.func,
  togglePetForm: PropTypes.func,
};
