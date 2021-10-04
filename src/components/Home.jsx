import React from "react";
import PropTypes from "prop-types";
import Button from "./Button/Button";

const Home = ({ logOut, currentUser }) => {
  return (
    <div>
      <p>hello {currentUser.firstname}</p>
      <Button
        text="Logout"
        onClick={logOut}
        className="button button-primary"
      ></Button>
    </div>
  );
};

Home.propTypes = {
  logOut: PropTypes.func,
  currentUser: PropTypes.object,
};

export default Home;
