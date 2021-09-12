import React, { Component } from "react";
import UserLogin from "./components/Login/UserLogin";
import SessionsAdapter from "./adapters/SessionsAdapter";
import UsersAdapter from "./adapters/UsersAdapter";
import { Route } from "react-router-dom";
import Home from "./components/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      errorMessage: null,
    };
  }

  componentDidMount() {
    SessionsAdapter.currentUser().then((data) => {
      this.setState({
        currentUser: data,
      });
    });
  }

  getUser = (user) => {
    return SessionsAdapter.getUser(user).then((userData) => {
      this.setState({
        currentUser: userData,
      });
      localStorage.setItem("token", userData.jwt);
    });
  };

  createUser = (user) => {
    return UsersAdapter.createUser(user).then((userData) => {
      debugger; // eslint-disable-line
      if (userData.error) {
        this.setState({
          errorMessage: userData.error,
        });
      } else {
        this.setState({
          currentUser: userData,
          userExists: false,
        });
        localStorage.setItem("token", userData.jwt);
      }
    });
  };

  logOut = () => {
    localStorage.token = "";
    this.setState({
      currentUser: null,
      dropdown: false,
    });
  };

  renderHome = () => {
    const { currentUser } = this.state;

    return <Home currentUser={currentUser} logOut={this.logOut} />;
  };

  renderLogin = () => {
    const { errorMessage } = this.state;
    return (
      <UserLogin
        errorMessage={errorMessage}
        getUser={this.getUser}
        createUser={this.createUser}
      />
    );
  };

  render() {
    const { currentUser } = this.state;

    return (
      <div className="app">
        {currentUser && !currentUser.error ? (
          <Route exact path="/" render={this.renderHome} />
        ) : (
          <Route exact path="/" render={this.renderLogin} />
        )}
      </div>
    );
  }
}

export default App;
