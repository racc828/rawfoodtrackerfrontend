import React from "react";
import PropTypes from "prop-types";
import ProteinForm from "./Forms/ProteinForm";
import MeatForm from "./Forms/MeatForm";
import Navigation from "./User/Navigation";
import PetContainer from "../components/Pet/PetContainer";
import PetForm from "../components/Forms/PetForm";
import Sidebar from "./Sidebar/Sidebar";

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
      displayPetForm: false,
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

  togglePetForm = () => {
    const { displayPetForm } = this.state;
    this.setState({
      displayPetForm: !displayPetForm,
    });
  };

  setActivePet = (e) => {
    this.setState({
      activePet: e.target.dataset.id,
    });
  };

  render() {
    const { currentUser, logOut, handleAddPet } = this.props;
    const {
      admin,
      displayProteinForm,
      displayMeatForm,
      activePet,
      displayPetForm,
    } = this.state;
    return (
      <div className="root">
        <Sidebar currentUser={currentUser} setActivePet={this.setActivePet} />

        <div className="main-wrapper">
          <Navigation
            currentUser={currentUser}
            admin={admin}
            logOut={logOut}
            toggleProteinForm={this.toggleProteinForm}
            toggleMeatForm={this.toggleMeatForm}
            togglePetForm={this.togglePetForm}
          />

          {displayProteinForm && <ProteinForm />}
          {displayMeatForm && <MeatForm />}
          {displayPetForm && (
            <PetForm userId={currentUser.id} handleAddPet={handleAddPet} />
          )}
          {activePet && <PetContainer petId={activePet} />}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  logOut: PropTypes.func,
  currentUser: PropTypes.object,
  handleAddPet: PropTypes.func,
};
