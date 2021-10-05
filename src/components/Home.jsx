import React from "react";
import PropTypes from "prop-types";
import ProteinForm from "./Forms/ProteinForm";
import MeatForm from "./Forms/MeatForm";
import Navigation from "./User/Navigation";
import Button from "../components/Button/Button";
import PetContainer from "../components/Pet/PetContainer";

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
      activePet: null,
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

  setActivePet = (e) => {
    this.setState({
      activePet: e.target.dataset.id,
    });
  };

  render() {
    const { currentUser, logOut } = this.props;
    const { admin, displayProteinForm, displayMeatForm, activePet } =
      this.state;
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
        {currentUser.pets.map((pet, i) => {
          return (
            <Button
              classsName="button button-secondary"
              text={pet.name}
              key={i}
              id={pet.id}
              onClick={this.setActivePet}
            />
          );
        })}
        {activePet && <PetContainer petId={activePet} />}
      </div>
    );
  }
}

Home.propTypes = {
  logOut: PropTypes.func,
  currentUser: PropTypes.object,
};
