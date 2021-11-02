import React from "react";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import PortionsAdapter from "../../adapters/PortionsAdapter";

export default class DailyPortionForm extends React.Component {
  static propTypes = {
    petId: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      muscle: null,
      bone: null,
      vegetable: null,
      liver: null,
      organ: null,
      nut: null,
      fruit: null,
    };
  }

  handleChange = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    this.setState({
      [property]: value,
    });
  };

  checkTotal = () => {
    let total = 0;
    Object.values(this.state).map((value) => {
      total += parseInt(value);
    });
    return total;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { petId } = this.props;
    let portion = { ...this.state, petId };
    const totalPercentage = this.checkTotal();

    if (totalPercentage !== 100) {
      alert("Those values do not equal 100%");
    } else {
      PortionsAdapter.createPortion(portion).then((portionData) => {
        if (portionData.error) {
          alert(portionData.error);
        } else {
          alert("success");
        }
      });
    }
  };

  render() {
    return (
      <form id="daily-portion-form" onSubmit={this.handleSubmit}>
        <h1>Add a portion (percentage)</h1>

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
            name="organ"
            label="organ"
            placeholder="organs"
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
    );
  }
}
