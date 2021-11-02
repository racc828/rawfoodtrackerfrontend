import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

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
    const { errorMessage, toggleSignUp } = this.props;

    return (
      <form id="sign-up" onSubmit={this.handleSubmit}>
        <Button
          text="Back"
          icon="arrow-left"
          onClick={toggleSignUp}
          className="button button-transparent pad-0"
        />
        <h1>Register</h1>

        <div className="input-group mb-3">
          <span className="input-group-text">
            <i class="bi bi-person-circle icon"></i>
          </span>
          <input
            className="form-control"
            onChange={this.handleChange}
            name="firstname"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i class="bi bi-person-circle icon"></i>
          </span>
          <input
            className="form-control"
            onChange={this.handleChange}
            name="lastname"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i class="bi bi-envelope icon"></i>
          </span>
          <input
            className="form-control"
            onChange={this.handleChange}
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text">
            <i class="bi bi-person-circle icon"></i>
          </span>
          <input
            className="form-control"
            onChange={this.handleChange}
            name="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="input-group mb-4">
          <span className="input-group-text">
            <i class="bi bi-lock icon"></i>
          </span>
          <input
            className="form-control"
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>

        <Button
          type="submit"
          className="button button-primary"
          text="Sign Up"
        ></Button>
        {errorMessage && (
          <div className="user-form-error">
            <span> {errorMessage}</span>
          </div>
        )}
      </form>
    );
  }
}

SignUp.propTypes = {
  createUser: PropTypes.func,
  errorMessage: PropTypes.string,
  toggleSignUp: PropTypes.func,
};
