import React from "react";
import Button from "../Button/Button";
import ProteinsAdapter from "../../adapters/ProteinsAdapter";

export default class ProteinForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
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
    let protein = this.state;
    ProteinsAdapter.createProtein(protein).then((proteinData) => {
      if (proteinData.error) {
        alert(proteinData.error);
      } else {
        alert("success");
        this.setState({
          name: "",
        });
      }
    });
  };

  render() {
    const { name } = this.state;
    return (
      <form id="protein-form" onSubmit={this.handleSubmit}>
        <h1>Add Protein</h1>

        <div className="input-group mb-4">
          <input
            type="text"
            className="form-control"
            onChange={this.handleChange}
            name="name"
            label="name"
            value={name}
            placeholder="Protein Name"
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
