import React from "react";
import PropTypes from "prop-types";
import MealsAdapter from "../../adapters/MealsAdapter";
import MealForm from "./MealForm";

import "react-tabs/style/react-tabs.css";

export default class MealContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    MealsAdapter.getAllCategories().then((data) => {
      this.setState({
        foodData: data,
      });
    });
  }

  render() {
    const { foodData } = this.state;
    const { petId } = this.props;

    return (
      <div className="col-md-6">
        {foodData && (
          <MealForm
            petId={petId}
            foodData={foodData}
            veggies={foodData.veggies}
          />
        )}
      </div>
    );
  }
}

MealContainer.propTypes = {
  petId: PropTypes.string,
};
