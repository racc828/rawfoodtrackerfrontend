import React from "react";
import Button from "../Button/Button";
import ProteinsAdapter from "../../adapters/ProteinsAdapter";
import BonesAdapter from "../../adapters/BonesAdapter";

export default class BoneForm extends React.Component {
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
    let rmb = {
      name,
      bone,
      muscle,
      protein_id,
    };
    BonesAdapter.createBone(rmb).then((boneData) => {
      if (boneData.error) {
        alert("failure");
      } else {
        alert("success");
        this.setState({
          protein_id: "",
          name: "",
          bone: null,
          muscle: null,
        });
      }
    });
  };

  render() {
    const { proteins, bone, muscle, protein_id, name } = this.state;
    return (
      <form id="raw-meaty-bone-form" onSubmit={this.handleSubmit}>
        <h1>Add Raw Meaty Bone</h1>

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
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="number"
            onChange={this.handleChange}
            name="muscle"
            label="muscle"
            placeholder="muscle"
            required
            value={muscle}
          />
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="number"
            onChange={this.handleChange}
            name="bone"
            label="bone"
            placeholder="bone"
            required
            value={bone}
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
