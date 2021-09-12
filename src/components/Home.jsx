import React from "react";
import PropTypes from "prop-types";

const Home = ({ logOut, currentUser }) => {
  return (
    <div>
      hello {currentUser.firstname} <button onClick={logOut}>logout</button>
    </div>
  );
};

Home.propTypes = {
  logOut: PropTypes.func,
  currentUser: PropTypes.object,
};

export default Home;
