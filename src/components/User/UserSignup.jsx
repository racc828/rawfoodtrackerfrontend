import React from "react";
import SignUp from "./SignUp";
import PropTypes from "prop-types";

const UserSignup = ({ createUser, errorMessage }) => {
  return (
    <div className="flex-row align-items-center min-vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body pad-4">
                <SignUp errorMessage={errorMessage} createUser={createUser} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;

UserSignup.propTypes = {
  createUser: PropTypes.func,
  errorMessage: PropTypes.string,
};
