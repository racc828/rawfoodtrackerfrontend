import React from "react";
import PropTypes from "prop-types";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    this.setState({
      [property]: value,
    });
  };

  handleSubmit = (e) => {
    const { getUser } = this.props;
    e.preventDefault();
    let user = this.state;
    getUser(user);
  };

  render() {
    const { handleSignUpClick, errorMessage } = this.props;
    return (
      <div className="user-form">
        <form id="user-login" onSubmit={this.handleSubmit}>
          <h1>Login</h1>

          <div className="user-form-input">
            <input
              type="text"
              onChange={this.handleChange}
              name="username"
              label="username"
              variant="filled"
              required
            />
          </div>

          <div className="user-form-input">
            <input
              type="password"
              onChange={this.handleChange}
              label="password"
              type="password"
              name="password"
              variant="filled"
              required
            />
          </div>
          <button type="submit">Login</button>
          {errorMessage && (
            <div className="user-form-error">
              <span> {errorMessage}</span>
            </div>
          )}
        </form>
        <button onClick={handleSignUpClick}>Sign up</button>
      </div>
    );
  }
}

Login.propTypes = {
  handleSignUpClick: PropTypes.func,
  getUser: PropTypes.func,
  errorMessage: PropTypes.string,
};
