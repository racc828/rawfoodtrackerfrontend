import React from "react";
import PropTypes from "prop-types";
import ProteinForm from "./Forms/ProteinForm";
import MeatForm from "./Forms/MeatForm";
import Navigation from "./User/Navigation";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      admin:
        props &&
        props.currentUser &&
        props.currentUser.username === "racquelginer"
          ? true
          : false,
      displayProteinForm: false,
      displayMeatForm: false,
    };
  }

  toggleProteinForm = () => {
    const { displayProteinForm } = this.state;
    this.setState({
      displayProteinForm: !displayProteinForm,
    });
  };

  toggleMeatForm = () => {
    const { displayMeatForm } = this.state;
    this.setState({
      displayMeatForm: !displayMeatForm,
    });
  };

  render() {
    const { currentUser, logOut } = this.props;
    const { admin, displayProteinForm, displayMeatForm } = this.state;
    return (
      <div>
        <Navigation
          currentUser={currentUser}
          admin={admin}
          logOut={logOut}
          toggleProteinForm={this.toggleProteinForm}
          toggleMeatForm={this.toggleMeatForm}
        />

        {displayProteinForm && <ProteinForm />}
        {displayMeatForm && <MeatForm />}
      </div>
    );
  }
}

Home.propTypes = {
  logOut: PropTypes.func,
  currentUser: PropTypes.object,
};
