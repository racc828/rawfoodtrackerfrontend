import React from "react";
import Login from "./Login";
import PropTypes from "prop-types";
import Link from "../Link/Link";

const UserLogin = ({ getUser, errorMessage }) => {
  return (
    <div className="flex-row align-items-center min-vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group">
              <div className="card pad-4">
                <div className="card-body">
                  <Login errorMessage={errorMessage} getUser={getUser} />
                </div>
              </div>
              <div className="card pad-4 bg-primary" style={{ width: "44%" }}>
                <div className="card-body text-center">
                  <h2> Sign Up</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link
                    href="signup"
                    className="button button-transparent"
                    text="Sign Up"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;

UserLogin.propTypes = {
  getUser: PropTypes.func,
  errorMessage: PropTypes.string,
};
