import React from "react";
import Button from "../Button/Button";
import PortionsAdapter from "../../adapters/PortionsAdapter";

export default class DailyPortionForm extends React.Component {
  constructor() {
    super();
    this.state = {
      muscle: null,
      bone: null,
      vegetable: null,
      liver: null,
      secretingOrgan: null,
      nut: null,
      fruit: null,
    };
  }

  // TODO change pet id above

  handleChange = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    this.setState({
      [property]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { petId } = this.props;
    let portion = { ...this.state, petId };
    PortionsAdapter.createPortion(portion).then((portionData) => {
      if (portionData.error) {
        alert(portionData.error);
      } else {
        alert("success");
      }
    });
  };

  render() {
    return (
      <div className="form">
        <form id="daily-portion-form" onSubmit={this.handleSubmit}>
          <h1>Add a portion</h1>

          <div className="form-input">
            <input
              type="number"
              onChange={this.handleChange}
              name="muscle"
              label="muscle"
              placeholder="muscle"
              required
            />

            <input
              type="number"
              onChange={this.handleChange}
              name="bone"
              label="bone"
              placeholder="bone"
              required
            />

            <input
              type="number"
              onChange={this.handleChange}
              name="vegetable"
              label="vegetable"
              placeholder="vegetable"
              required
            />

            <input
              type="number"
              onChange={this.handleChange}
              name="liver"
              label="liver"
              placeholder="liver"
              required
            />

            <input
              type="number"
              onChange={this.handleChange}
              name="secretingOrgan"
              label="secretingOrgan"
              placeholder="secreting organs"
              required
            />

            <input
              type="number"
              onChange={this.handleChange}
              name="nut"
              label="nut"
              placeholder="nut"
              required
            />

            <input
              type="number"
              onChange={this.handleChange}
              name="fruit"
              label="fruit"
              placeholder="fruit"
              required
            />
          </div>

          <Button
            type="submit"
            text="Add"
            className="button button-primary"
          ></Button>
        </form>
      </div>
    );
  }
}
