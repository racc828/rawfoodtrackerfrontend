import React from "react";
import PropTypes from "prop-types";
import ProteinForm from "./Forms/ProteinForm";
import BoneForm from "./Forms/BoneForm";
import Header from "./User/Header";
import PetContainer from "../components/Pet/PetContainer";
import PetForm from "../components/Forms/PetForm";
import Sidebar from "./Sidebar/Sidebar";
import LiverForm from "../components/Forms/LiverForm";
import OrganForm from "../components/Forms/OrganForm";
import MuscleForm from "../components/Forms/MuscleForm";

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
      activePet: null,
      displayPetForm: false,
      activeCategoryForm: null,
      activeCategories: ["liver", "organ", "bone", "muscle"],
    };
  }

  toggleProteinForm = () => {
    const { displayProteinForm } = this.state;
    this.setState({
      displayProteinForm: !displayProteinForm,
    });
  };

  togglePetForm = () => {
    const { displayPetForm } = this.state;
    this.setState({
      displayPetForm: !displayPetForm,
    });
  };

  setActiveCategoryForm = (e) => {
    const { activeCategoryForm } = this.state;

    if (activeCategoryForm === e.target.innerText) {
      this.setState({
        activeCategoryForm: null,
      });
    } else {
      this.setState({
        activeCategoryForm: e.target.innerText,
      });
    }
  };

  setActivePet = (e) => {
    this.setState({
      activePet: e.target.dataset.id,
      displayPetForm: false,
      displayProteinForm: false,
      activeCategoryForm: "",
    });
  };

  render() {
    const { currentUser, logOut, handleAddPet } = this.props;
    const {
      admin,
      displayProteinForm,
      activePet,
      displayPetForm,
      activeCategories,
      activeCategoryForm,
    } = this.state;

    const components = {
      liver: LiverForm,
      organ: OrganForm,
      muscle: MuscleForm,
      bone: BoneForm,
    };

    const CategoryForm = activeCategoryForm
      ? components[activeCategoryForm]
      : null;

    return (
      <div className="root">
        <Sidebar currentUser={currentUser} setActivePet={this.setActivePet} />

        <div className="main-wrapper">
          <Header
            currentUser={currentUser}
            admin={admin}
            logOut={logOut}
            toggleProteinForm={this.toggleProteinForm}
            togglePetForm={this.togglePetForm}
            activeCategories={activeCategories}
            activeCategoryForm={activeCategoryForm}
            setActiveCategoryForm={this.setActiveCategoryForm}
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

              {activeCategoryForm && (
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <CategoryForm />
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
