import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import classNames from "classnames";
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
    const { errorMessage } = this.props;
    const inputClasses = classNames({
      "form-control": true,
      "form-control-error": errorMessage ? true : false,
    });
    return (
      <form id="user-login" onSubmit={this.handleSubmit}>
        <h1>Login</h1>

        <div className="input-group mb-3">
          <span className="input-group-text">
            <i class="bi bi-person-circle icon"></i>
          </span>
          <input
            className={inputClasses}
            type="text"
            placeholder="Username"
            onChange={this.handleChange}
            name="username"
            label="username"
            required
          />
        </div>

        <div className="input-group mb-4">
          <span className="input-group-text">
            <i class="bi bi-lock icon"></i>
          </span>
          <input
            className={inputClasses}
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
            label="password"
            type="password"
            name="password"
            required
          />
        </div>
        {errorMessage && (
          <div className="form-error-message">
            <span> {errorMessage}</span>
          </div>
        )}
        <div className="row">
          <Button
            type="submit"
            text="Login"
            className="button button-primary"
          ></Button>
        </div>
      </form>
    );
  }
}

Login.propTypes = {
  getUser: PropTypes.func,
  errorMessage: PropTypes.string,
};
