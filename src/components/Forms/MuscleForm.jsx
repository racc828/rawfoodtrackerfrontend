import React from "react";
import Button from "../Button/Button";
import ProteinsAdapter from "../../adapters/ProteinsAdapter";
import MusclesAdapter from "../../adapters/MusclesAdapter";

export default class MuscleForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      protein_id: "",
      proteins: [],
    };
  }

  componentDidMount() {
    // TODO change this soi t only gets thep roteins
    ProteinsAdapter.getProteins().then((data) => {
      this.setState({
        proteins: data,
      });
    });
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
    const { name, protein_id } = this.state;
    let muscle = {
      name,
      protein_id,
    };
    MusclesAdapter.createMuscle(muscle).then((muscleData) => {
      if (muscleData.error) {
        alert("failure");
      } else {
        alert("success");
      }
      this.setState({
        protein_id: "",
        name: "",
      });
    });
  };

  render() {
    const { proteins, protein_id, name } = this.state;
    return (
      <form id="liver-form" onSubmit={this.handleSubmit}>
        <h1>Add Muscle</h1>

        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            onChange={this.handleChange}
            name="name"
            label="name"
            placeholder="name"
            required
            value={name}
          />
        </div>

        <div className="input-group mb-4">
          <select
            className="form-control form-select"
            name="protein_id"
            id="protein_id"
            onChange={this.handleChange}
            value={protein_id}
          >
            <option> Select a name</option>
            {proteins.map((protein) => {
              return <option value={protein.id}> {protein.name}</option>;
            })}
          </select>
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
