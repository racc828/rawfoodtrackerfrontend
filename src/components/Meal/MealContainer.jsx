import React from "react";
import PropTypes from "prop-types";
import MealsAdapter from "../../adapters/MealsAdapter";
import MealForm from "./MealForm";
import DailyPortionData from "../Pet/DailyPortionData";

import "react-tabs/style/react-tabs.css";

export default class MealContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      dailyTotal: 38,
      calculatedPortions: {
        bone: 0,
        muscle: 0,
        liver: 0,
        organ: 0,
        nut: 0,
        fruit: 0,
        veggie: 0,
      },
    };
  }

  componentDidMount() {
    MealsAdapter.getAllCategories().then((data) => {
      this.setState({
        foodData: data,
      });
    });
  }

  calculatePortion = (portionData) => {
    const boneContent = (portionData.ounces * portionData.bone) / 100;
    const muscleContent = portionData.ounces - boneContent;

    this.setState({
      calculatedPortions: {
        bone: (this.state.calculatedPortions.bone += boneContent),
        muscle: (this.state.calculatedPortions.muscle += muscleContent),
      },
    });
  };

  render() {
    const { foodData, dailyTotal, calculatedPortions } = this.state;
    const { petId, petPortionData } = this.props;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6">
            {foodData && (
              <MealForm
                petId={petId}
                foodData={foodData}
                veggies={foodData.veggies}
                calculatePortion={this.calculatePortion}
              />
            )}
          </div>
          <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <ul class="list-group list-group-flush">
                  {petPortionData &&
                    Object.entries(petPortionData).map(([key, value], i) => {
                      if (key.includes("at") || key.includes("id")) {
                        return null;
                      } else {
                        return (
                          <DailyPortionData
                            calculatedPortions={calculatedPortions}
                            key={i}
                            dailyTotal={dailyTotal}
                            category={key}
                            percentage={value}
                          />
                        );
                      }
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

MealContainer.propTypes = {
  petId: PropTypes.string,
  petPortionData: PropTypes.object,
};
