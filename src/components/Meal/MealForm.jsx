import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import MealSubForm from "./MealSubForm";
import MealsAdapter from "../../adapters/MealsAdapter";
import NewPotentialMeal from "./NewPotentialMeal";
import { categoryTypes } from "../../global/js/constants";

export default class MealForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      foodTypes: [],
      foodTypeCounter: 0,
    };
  }

  transformFoodData = (foodData) => {
    const newArray = Object.keys(foodData).map((food) => {
      return { name: food, foodItems: foodData[food] };
    });

    return newArray;
  };

  addFoodType = (foodData) => {
    const foodDataUnique = {
      ...foodData,
      uniqueId: this.state.foodTypeCounter,
    };
    this.setState({
      foodTypes: [...this.state.foodTypes, foodDataUnique],
      foodTypeCounter: (this.state.foodTypeCounter += 1),
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
      if (mealData.error) {
        alert("failure");
      } else {
        alert("success");
      }
    });
  };

  removeFoodTypeFromFoodTypes = (uniqueId) => {
    const { foodTypes } = this.state;
    return foodTypes.filter((foodType) => foodType.uniqueId !== uniqueId);
  };

  deleteMealPortionData = (uniqueId) => {
    const { calculateRMBPortion, calculatePortion } = this.props;
    const deleteFood = this.state.foodTypes.find(
      (foodType) => foodType.uniqueId === uniqueId
    );

    if (deleteFood.categoryName === categoryTypes.bone) {
      calculateRMBPortion({
        bone: deleteFood.bone,
        ounces: deleteFood.ounces,
        removing: true,
      });
    } else {
      calculatePortion({
        ounces: deleteFood.ounces,
        categoryName: deleteFood.categoryName,
        removing: true,
      });
    }

    const newFoodTypesArray = this.removeFoodTypeFromFoodTypes(uniqueId);
    this.setState({
      foodTypes: newFoodTypesArray,
    });
  };

  render() {
    const { foodData, calculateRMBPortion, calculatePortion } = this.props;
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
            <div className="col-12">
              {newData.map((data) => {
                return (
                  <MealSubForm
                    calculateRMBPortion={calculateRMBPortion}
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
          </div>
        </form>
        <NewPotentialMeal
          foodTypes={foodTypes}
          deleteMealPortionData={this.deleteMealPortionData}
        />
      </React.Fragment>
    );
  }
}

MealForm.propTypes = {
  petId: PropTypes.string,
  calculateRMBPortion: PropTypes.func,
  calculatePortion: PropTypes.func,
};
