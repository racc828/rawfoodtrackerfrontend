import React from "react";
import PropTypes from "prop-types";
import ProteinForm from "./Forms/ProteinForm";
import MeatForm from "./Forms/MeatForm";
import Header from "./User/Header";
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
      displayMeatForm: false,
      displayPetForm: false,
      displayProteinForm: false,
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
          <Header
            currentUser={currentUser}
            admin={admin}
            logOut={logOut}
            toggleProteinForm={this.toggleProteinForm}
            toggleMeatForm={this.toggleMeatForm}
            togglePetForm={this.togglePetForm}
          />
          <div className="container">
            <div className="row">
              {displayProteinForm && (
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <ProteinForm />
                    </div>
                  </div>
                </div>
              )}

              {displayMeatForm && (
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <MeatForm />
                    </div>
                  </div>
                </div>
              )}

              {displayPetForm && (
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <PetForm
                        userId={currentUser.id}
                        handleAddPet={handleAddPet}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activePet && <PetContainer petId={activePet} />}
            </div>
          </div>
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
