import React, { Component } from "react";
import UserLogin from "./components/User/UserLogin";
import UserSignup from "./components/User/UserSignup";
import SessionsAdapter from "./adapters/SessionsAdapter";
import PetsAdapter from "./adapters/PetsAdapter";
import UsersAdapter from "./adapters/UsersAdapter";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.scss";
import "./global/css/grid.scss";
import "./global/css/helpers.scss";
import PropTypes from "prop-types";
import { Redirect } from "react-router";

class App extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

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

  redirectHome = () => {
    return <Redirect to="/" />;
  };

  getUser = (user) => {
    return SessionsAdapter.getUser(user).then((userData) => {
      if (userData.error) {
        this.setState({
          currentUser: null,
          errorMessage: userData.error,
        });
      } else {
        this.setState({
          currentUser: userData,
          errorMessage: null,
        });
        localStorage.setItem("token", userData.jwt);
        this.redirectHome();
      }
    });
  };

  createUser = (user) => {
    return UsersAdapter.createUser(user).then((userData) => {
      if (userData.error) {
        this.setState({
          currentUser: null,
          errorMessage: userData.error,
        });
      } else {
        this.setState({
          currentUser: userData,
          errorMessage: null,
        });
        localStorage.setItem("token", userData.jwt);
        this.redirectHome();
      }
    });
  };

  logOut = () => {
    localStorage.token = "";
    this.setState({
      currentUser: null,
      errorMessage: null,
    });
  };

  handleAddPet = (pet) => {
    const { currentUser } = this.state;
    PetsAdapter.createPet(pet).then((petData) => {
      if (petData.error) {
        alert(petData.error);
      } else {
        this.setState({
          currentUser: {
            ...currentUser,
            pets: [...currentUser.pets, petData],
          },
        });
      }
    });
  };

  renderHome = () => {
    const { currentUser } = this.state;

    return (
      <Home
        currentUser={currentUser}
        logOut={this.logOut}
        handleAddPet={this.handleAddPet}
      />
    );
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

  renderUserSignup = () => {
    const { errorMessage } = this.state;
    return (
      <UserSignup errorMessage={errorMessage} createUser={this.createUser} />
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
        <Route exact path="/login" render={this.renderLogin} />
        <Route exact path="/signup" render={this.renderUserSignup} />
      </div>
    );
  }
}

export default App;
