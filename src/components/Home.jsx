import React from "react";
import PropTypes from "prop-types";
import ProteinForm from "./Forms/ProteinForm";
import BoneForm from "./Forms/BoneForm";
import Header from "./User/Header";
import PetContainer from "../components/Pet/PetContainer";
import PetForm from "../components/Forms/PetForm";
import Sidebar from "./Sidebar/Sidebar";
import LiverForm from "../components/Forms/LiverForm";

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
      displayBoneForm: false,
      activePet: null,
      displayPetForm: false,
      displayLiverForm: false,
    };
  }

  toggleProteinForm = () => {
    const { displayProteinForm } = this.state;
    this.setState({
      displayProteinForm: !displayProteinForm,
    });
  };

  toggleBoneForm = () => {
    const { displayBoneForm } = this.state;
    this.setState({
      displayBoneForm: !displayBoneForm,
    });
  };

  toggleLiverForm = () => {
    const { displayLiverForm } = this.state;
    this.setState({
      displayLiverForm: !displayLiverForm,
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
      displayBoneForm: false,
      displayPetForm: false,
      displayProteinForm: false,
      displayLiverForm: false,
    });
  };

  render() {
    const { currentUser, logOut, handleAddPet } = this.props;
    const {
      admin,
      displayProteinForm,
      displayBoneForm,
      activePet,
      displayPetForm,
      displayLiverForm,
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
            toggleBoneForm={this.toggleBoneForm}
            togglePetForm={this.togglePetForm}
            toggleLiverForm={this.toggleLiverForm}
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

              {displayBoneForm && (
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <BoneForm />
                    </div>
                  </div>
                </div>
              )}

              {displayLiverForm && (
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <LiverForm />
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
