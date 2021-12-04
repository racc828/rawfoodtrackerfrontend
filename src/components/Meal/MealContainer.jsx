import React from "react";
import PropTypes from "prop-types";
import MealsAdapter from "../../adapters/MealsAdapter";
import MealForm from "./MealForm";
import DailyPortionContainer from "../Pet/DailyPortionContainer";
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
    const { calculatedPortions } = this.state;
    const { ounces, removing } = portionData;

    let calculatedPortion;

    if (removing) {
      calculatedPortion = calculatedPortions[portionData.categoryName] -=
        parseInt(ounces);
    } else {
      calculatedPortion = calculatedPortions[portionData.categoryName] +=
        parseInt(ounces);
    }

    this.setState({
      calculatedPortions: {
        ...calculatedPortions,
        [portionData.categoryName]: calculatedPortion,
      },
    });
  };

  calculateRMBPortion = (portionData) => {
    const { calculatedPortions } = this.state;
    const { ounces, bone, removing } = portionData;

    let boneContent = (ounces * bone) / 100;
    let muscleContent = ounces - boneContent;

    let calculatedBoneContent, calculatedMuscleContent;

    if (removing) {
      calculatedBoneContent = this.state.calculatedPortions.bone -= boneContent;
      calculatedMuscleContent = this.state.calculatedPortions.muscle -=
        muscleContent;
    } else {
      calculatedBoneContent = this.state.calculatedPortions.bone += boneContent;
      calculatedMuscleContent = this.state.calculatedPortions.muscle +=
        muscleContent;
    }

    this.setState({
      calculatedPortions: {
        ...calculatedPortions,
        bone: calculatedBoneContent,
        muscle: calculatedMuscleContent,
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
                calculateRMBPortion={this.calculateRMBPortion}
              />
            )}
          </div>
          <div className="col-md-6">
            <DailyPortionContainer
              petPortionData={petPortionData}
              calculatedPortions={calculatedPortions}
              dailyTotal={dailyTotal}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

MealContainer.propTypes = {
  petId: PropTypes.string,
  calculatedPortions: PropTypes.object,
  dailyTotal: PropTypes.object,
};
