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
  };

  render() {
    const { meats } = this.state;
    return (
      <div className="form">
        <form id="calculator-form" onSubmit={this.handleSubmit}>
          <h1>Daily Calculator</h1>

          <div className="form-input">
            <input
              type="number"
              placeholder="ounces"
              onChange={this.handleChange}
              name="ounces"
              label="ounces"
              required
            />
          </div>

          <select name="meat_id" id="meat_id" onChange={this.handleChange}>
            <option> Select a meat</option>
            {meats.map((meat) => {
              return (
                <option value={meat.id}>
                  {meat.proteinName}
                  {meat.name}
                </option>
              );
            })}
          </select>

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
