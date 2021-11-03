import React from "react";
import MeatsAdapter from "../../adapters/MeatsAdapter";
import Button from "../Button/Button";

export default class DailyCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      meats: [],
    };
  }

  componentDidMount() {
    // TODO change this soi t only gets thep roteins
    MeatsAdapter.getMeats().then((data) => {
      this.setState({
        meats: data,
      });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { bone, ounces } = this.state;
    const portionData = { bone, ounces };
    this.props.calculatePortion(portionData);
  };

  handleChange = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    this.setState({
      [property]: value,
    });
  };

  render() {
    const { meats } = this.state;
    return (
      <form id="calculator-form" onSubmit={this.handleSubmit}>
        <h1>Daily Calculator</h1>

        <div className="input-group mb-3">
          <input
            className="form-control"
            type="number"
            placeholder="ounces"
            onChange={this.handleChange}
            name="ounces"
            label="ounces"
            required
          />
        </div>

        <div className="input-group mb-4">
          <select
            name="bone"
            id="meat_id"
            onChange={this.handleChange}
            className="form-control form-select"
          >
            <option> Select a meat</option>
            {meats.map((meat, i) => {
              return (
                <option key={i} value={meat.bone}>
                  {meat.proteinName}
                  {meat.name}
                </option>
              );
            })}
          </select>
        </div>

        <Button
          type="submit"
          text="Calculate"
          className="button button-primary"
        ></Button>
      </form>
    );
  }
}
