import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
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
    return (
      <form id="user-login" onSubmit={this.handleSubmit}>
        <h1>Login</h1>

        <div className="input-group mb-3">
          <span className="input-group-text">
            <i class="bi bi-person-circle icon"></i>
          </span>
          <input
            className="form-control"
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
            className="form-control"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
            label="password"
            type="password"
            name="password"
            required
          />
        </div>
        <div className="row">
          <Button
            type="submit"
            text="Login"
            className="button button-primary"
          ></Button>
        </div>

        {errorMessage && (
          <div className="user-form-error">
            <span> {errorMessage}</span>
          </div>
        )}
      </form>
    );
  }
}

Login.propTypes = {
  getUser: PropTypes.func,
  errorMessage: PropTypes.string,
};
