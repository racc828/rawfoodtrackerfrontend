import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import PropTypes from "prop-types";
import Button from "../Button/Button";

export default class User extends React.Component {
  constructor() {
    super();
    this.state = {
      signUp: false,
    };
  }

  handleToggleSignUpClick = () => {
    const { signUp } = this.state;
    this.setState({
      signUp: !signUp,
    });
  };

  render() {
    const { getUser, createUser, errorMessage } = this.props;
    const { signUp } = this.state;
    return (
      <div className="flex-row align-items-center min-vh-100">
        <div className="container">
          <div className="row justify-content-center">
            {!signUp && (
              <div className="col-md-8">
                <div className="card-group">
                  <div className="card pad-4">
                    <div className="card-body">
                      <Login errorMessage={errorMessage} getUser={getUser} />
                    </div>
                  </div>
                  <div
                    className="card pad-4 bg-primary"
                    style={{ width: "44%" }}
                  >
                    <div className="card-body text-center">
                      <h2> Sign Up</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <Button
                        onClick={this.handleToggleSignUpClick}
                        text="Sign Up"
                        className="button button-secondary"
                      ></Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {signUp && (
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body pad-4">
                    <SignUp
                      errorMessage={errorMessage}
                      createUser={createUser}
                      toggleSignUp={this.handleToggleSignUpClick}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  getUser: PropTypes.func,
  createUser: PropTypes.func,
  errorMessage: PropTypes.string,
};
