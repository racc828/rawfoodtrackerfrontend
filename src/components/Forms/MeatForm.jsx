import React from "react";
import Button from "../Button/Button";
import ProteinsAdapter from "../../adapters/ProteinsAdapter";
import MeatsAdapter from "../../adapters/MeatsAdapter";

export default class MeatForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      bone: null,
      muscle: null,
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
    const { name, bone, muscle, protein_id } = this.state;
    let meat = {
      name,
      bone,
      muscle,
      protein_id,
    };
    MeatsAdapter.createMeat(meat).then((meatData) => {
      if (meatData.error) {
        alert("failure");
      } else {
        alert("success");
      }
    });
  };

  render() {
    const { proteins } = this.state;
    return (
      <div className="form">
        <form id="protein-form" onSubmit={this.handleSubmit}>
          <h1>Add Protein</h1>

          <div className="form-input">
            <input
              type="text"
              onChange={this.handleChange}
              name="name"
              label="name"
              placeholder="name"
              required
            />
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
            <select
              name="protein_id"
              id="protein_id"
              onChange={this.handleChange}
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
      </div>
    );
  }
}
