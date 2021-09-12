import React from "react";
import PropTypes from "prop-types";

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
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
    const { createUser } = this.props;
    e.preventDefault();
    let newUser = this.state;
    createUser(newUser);
  };

  render() {
    const { errorMessage } = this.props;
    return (
      <div className="user-form">
        <form id="sign-up" onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>
          <div className="user-form-input">
            <input
              onChange={this.handleChange}
              name="firstname"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="user-form-input">
            <input
              onChange={this.handleChange}
              name="lastname"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="user-form-input">
            <input
              onChange={this.handleChange}
              name="email"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="user-form-input">
            <input
              onChange={this.handleChange}
              name="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="user-form-input">
            <input
              onChange={this.handleChange}
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>

          <button type="submit">Sign Up</button>
          {errorMessage && (
            <div className="user-form-error">
              <span> {errorMessage}</span>
            </div>
          )}
        </form>
      </div>
    );
  }
}

SignUp.propTypes = {
  createUser: PropTypes.func,
  errorMessage: PropTypes.string,
};
