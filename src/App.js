import React, { Component } from "react";
import Login from "./components/Login";
import SessionsAdapter from "./adapters/SessionsAdapter";
import { Route } from "react-router-dom";
import Home from "./components/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
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

  renderHome = () => {
    const { currentUser } = this.state;

    return <Home currentUser={currentUser} />;
  };

  renderLogin = () => {
    return <Login getUser={this.getUser} />;
  };

  render() {
    const { currentUser } = this.state;

    return (
      <div className="app">
        {!currentUser.error ? (
          <Route exact path="/" render={this.renderHome} />
        ) : (
          <Route exact path="/" render={this.renderLogin} />
        )}
      </div>
    );
  }
}

export default App;
