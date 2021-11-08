import React from "react";
import Button from "../Button/Button";

export default class MealForm extends React.Component {
  constructor() {
    super();
    this.state = {
      foodType: {},
      ounces: "",
    };
  }

  handleChange = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    this.setState({
      [property]: value,
    });
  };

  handleChangeSelect = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    const selectedOption = e.target.selectedOptions[0].text;

    this.setState({
      [property]: { id: value, name: selectedOption },
    });
  };

  handleSubmitFoodType = (e) => {
    const { addFoodType, name } = this.props;
    const { foodType, ounces } = this.state;
    const formData = { ...foodType, ounces, categoryName: name };
    addFoodType(formData);
    this.setState({
      foodType: {},
      ounces: "",
    });
  };

  render() {
    const { foodType, name } = this.props;

    return (
      <React.Fragment>
        <form id="meal-sub-form">
          <div className="row">
            <div className="col-md-6">
              <div className="input-group mb-3">
                <select
                  className="form-control form-select"
                  name="foodType"
                  id="foodType"
                  onChange={this.handleChangeSelect}
                >
                  <option> Select {name}</option>
                  {foodType.map((food) => {
                    return (
                      <option value={food.id} data-name={food.name}>
                        {food.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col-md-5">
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="number"
                  onChange={this.handleChange}
                  name="ounces"
                  label="ounces"
                  placeholder="Ounces"
                  required
                />
              </div>
            </div>
            <div className="col-md-1">
              <Button
                type="button"
                onClick={this.handleSubmitFoodType}
                className="button button-transparent"
                icon="plus"
              />
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
