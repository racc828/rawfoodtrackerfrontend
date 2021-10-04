import React from "react";
import PropTypes from "prop-types";
import Button from "./Button/Button";
import ProteinForm from './Forms/ProteinForm'

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

  render() {
    const { currentUser, logOut } = this.props;
    const { admin, displayProteinForm } = this.state;
    return (
      <div>
        <p>hello {currentUser.firstname}</p>
        {admin && (
          <Button
            text="Add Protein"
            onClick={this.toggleProteinForm}
            className="button button-secondary"
          ></Button>
        )}

        <Button
          text="Logout"
          onClick={logOut}
          className="button button-primary"
        ></Button>

        {displayProteinForm && <ProteinForm />}
      </div>
    );
  }
}

Home.propTypes = {
  logOut: PropTypes.func,
  currentUser: PropTypes.object,
};
