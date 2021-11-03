import React from "react";
import Button from "../Button/Button";
import PropTypes from "prop-types";

export default class PetForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: null,
      breed: "",
    };
  }

  handleChange = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    this.setState({
      [property]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { userId, handleAddPet } = this.props;
    const petInfo = { ...this.state, userId };
    handleAddPet(petInfo);
  };

  render() {
    return (
      <form id="pet-form" onSubmit={this.handleSubmit}>
        <h1>Add Pet</h1>

        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            onChange={this.handleChange}
            name="name"
            label="name"
            placeholder="name"
            required
          />
        </div>

        <div className="input-group mb-3">
          <input
            className="form-control"
            type="number"
            onChange={this.handleChange}
            name="age"
            label="age"
            placeholder="age"
            required
          />
        </div>

        <div className="input-group mb-4">
          <input
            className="form-control"
            type="text"
            onChange={this.handleChange}
            name="breed"
            label="breed"
            placeholder="breed"
            required
          />
        </div>

        <Button
          type="submit"
          text="Add"
          className="button button-primary"
        ></Button>
      </form>
    );
  }
}

PetForm.propTypes = {
  userId: PropTypes.string,
  handleAddPet: PropTypes.func,
};
