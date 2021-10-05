import React from "react";
import PropTypes from "prop-types";
import "../../global/css/buttons.scss";
import Button from "../Button/Button";

const Navigation = ({
  currentUser,
  admin,
  toggleProteinForm,
  logOut,
  toggleMeatForm,
}) => {
  return (
    <nav>
      {currentUser.firstname}
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
        text="Logout"
        onClick={logOut}
        className="button button-primary"
      ></Button>
    </nav>
  );
};

export default Navigation;

Navigation.propTypes = {
  currentUser: PropTypes.object,
  admin: PropTypes.bool,
  toggleProteinForm: PropTypes.func,
  logOut: PropTypes.func,
  toggleMeatForm: PropTypes.func,
};
