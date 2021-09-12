import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import PropTypes from "prop-types";

export default class UserLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      signUp: false,
    };
  }

  handleSignUpClick = () => {
    this.setState({
      signUp: true,
    });
  };

  render() {
    const { getUser, createUser } = this.props;
    const { signUp } = this.state;
    return (
      <div>
        {signUp ? (
          <SignUp createUser={createUser} />
        ) : (
          <Login handleSignUpClick={this.handleSignUpClick} getUser={getUser} />
        )}
      </div>
    );
  }
}

UserLogin.propTypes = {
  getUser: PropTypes.func,
  createUser: PropTypes.func,
};
