import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { categoryTypes } from "../../global/js/constants";

export default class MealSubForm extends React.Component {
  constructor() {
    super();
    this.state = {
      foodType: {
        id: "0",
      },
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
    const { name } = this.props;
    let property = e.target.name;
    let value = e.target.value;
    const selectedOption = e.target.selectedOptions[0].text;
    if (name === categoryTypes.bone) {
      const boneContent = e.target.selectedOptions[0].dataset.bone;
      this.setState({
        [property]: { id: value, name: selectedOption, bone: boneContent },
      });
    } else {
      this.setState({
        [property]: { id: value, name: selectedOption },
      });
    }
  };

  handleSubmitFoodType = (e) => {
    const { addFoodType, name, calculateRMBPortion, calculatePortion } =
      this.props;

    const { foodType, ounces } = this.state;
    const formData = { ...foodType, ounces, categoryName: name };

    if (name === categoryTypes.bone) {
      calculateRMBPortion({ ounces, bone: foodType.bone });
    } else {
      calculatePortion({ ounces, name, categoryName: name });
    }
    addFoodType(formData);

    this.setState({
      ounces: "",
      foodType: {
        id: "0",
      },
    });
  };

  render() {
    const { foodType, name } = this.props;
    const { ounces } = this.state;

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
                  value={this.state.foodType.id}
                >
                  <option value="0"> Select {name}</option>
                  {foodType.map((food) => {
                    if (food.bone_content) {
                      return (
                        <option value={food.id} data-bone={food.bone_content}>
                          {food.name} - {food.bone_content}%
                        </option>
                      );
                    } else {
                      return <option value={food.id}>{food.name}</option>;
                    }
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
                  value={ounces}
                  required
                />
              </div>
            </div>
            <div className="col-md-1">
              <Button
                type="button"
                onClick={this.handleSubmitFoodType}
                className="button button-transparent pad-0"
                icon="plus"
              />
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

MealSubForm.propTypes = {
  name: PropTypes.string,
  foodType: PropTypes.array,
  calculateRMBPortion: PropTypes.func,
  calculatePortion: PropTypes.func,
};
