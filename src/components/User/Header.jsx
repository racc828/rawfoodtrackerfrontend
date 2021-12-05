import React from "react";
import PropTypes from "prop-types";
import "../../global/css/buttons.scss";
import Button from "../Button/Button";

const Header = ({
  currentUser,
  admin,
  toggleProteinForm,
  logOut,
  togglePetForm,
  activeCategories,
  setActiveCategoryForm,
}) => {
  return (
    <header className="header mb-4">
      <div className="container d-flex align-items-center">
        <div className="header-left">{currentUser.firstname}</div>
        <div className="header-right">
          {admin && (
            <React.Fragment>
              <Button
                text="Add Protein"
                onClick={toggleProteinForm}
                className="button button-transparent"
              ></Button>
              {activeCategories.map((category) => {
                return (
                  <Button
                    text={category}
                    onClick={setActiveCategoryForm}
                    className="button button-transparent"
                  ></Button>
                );
              })}
            </React.Fragment>
          )}
          <Button
            text="Add Pet"
            onClick={togglePetForm}
            className="button button-transparent"
          ></Button>
          <Button
            text="Logout"
            onClick={logOut}
            className="button button-primary"
          ></Button>
        </div>
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
  toggleBoneForm: PropTypes.func,
  togglePetForm: PropTypes.func,
  toggleOrganForm: PropTypes.func,
  toggleMuscleForm: PropTypes.func,
  toggleLiverForm: PropTypes.func,
};
