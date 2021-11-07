import React from "react";
import BonesAdapter from "../../adapters/BonesAdapter";
import Button from "../Button/Button";

export default class DailyCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      bones: [],
    };
  }

  componentDidMount() {
    // TODO change this soi t only gets thep roteins
    BonesAdapter.getBones().then((data) => {
      this.setState({
        bones: data,
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
    const { bones } = this.state;
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
            id="bone_id"
            onChange={this.handleChange}
            className="form-control form-select"
          >
            <option> Select a raw meaty bone</option>
            {bones.map((bone, i) => {
              return (
                <option key={i} value={bone.bone}>
                  {bone.proteinName}
                  {bone.name}
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
