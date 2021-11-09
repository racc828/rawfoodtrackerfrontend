import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import MealSubForm from "./MealSubForm";
import MealsAdapter from "../../adapters/MealsAdapter";

export default class MealForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      foodTypes: [],
    };
  }

  transformFoodData = (foodData) => {
    const newArray = Object.keys(foodData).map((food) => {
      return { name: food, foodItems: foodData[food] };
    });

    return newArray;
  };

  addFoodType = (foodData) => {
    this.setState({
      foodTypes: [...this.state.foodTypes, foodData],
    });
  };

  handleChange = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    this.setState({
      [property]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const state = this.state;
    const { petId } = this.props;
    const newMealData = { ...state, petId };
    MealsAdapter.createMeal(newMealData).then((mealData) => {
      // prettier-ignore
      console.log(`%cconsolelog`, 'background: #FF1493; color: #fff; padding: 3px;'); // eslint-disable-line
    });
  };

  render() {
    const { foodData, calculatePortion } = this.props;
    const { foodTypes } = this.state;
    const newData = this.transformFoodData(foodData);

    return (
      <React.Fragment>
        <form id="meal-form" onSubmit={this.handleSubmit}>
          <div className="row">
            <h1>Add Meal</h1>

            <div className="col-12">
              <div className="input-group mb-3">
                <input
                  className="form-control"
                  type="text"
                  onChange={this.handleChange}
                  name="name"
                  label="name"
                  placeholder="name"
                  required
                />
              </div>
            </div>
            {newData.map((data) => {
              return (
                <MealSubForm
                  calculatePortion={calculatePortion}
                  addFoodType={this.addFoodType}
                  foodType={data.foodItems}
                  name={data.name}
                />
              );
            })}
          </div>
          <Button
            type="submit"
            text="Add"
            className="button button-primary"
          ></Button>
        </form>
        {foodTypes.map((food) => {
          return (
            <div>
              {food.name} {food.ounces}oz
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

MealForm.propTypes = {
  petId: PropTypes.string,
  calculatePortion: PropTypes.func,
};
