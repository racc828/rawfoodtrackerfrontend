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
    return (
      <div>
        <div>
          <form id="sign-up" onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
            <input
              onChange={this.handleChange}
              name="firstname"
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={this.handleChange}
              name="lastname"
              type="text"
              placeholder="Last Name"
            />
            <input
              onChange={this.handleChange}
              name="email"
              type="email"
              placeholder="Email"
            />
            <div>
              {this.props.userExists ? (
                <small>
                  Username already exists, please enter a different one above
                </small>
              ) : null}
              <input
                onChange={this.handleChange}
                name="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <input
              onChange={this.handleChange}
              name="password"
              type="password"
              placeholder="Password"
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  createUser: PropTypes.func,
};
