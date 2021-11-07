import React from "react";
import PropTypes from "prop-types";
import DailyPortion from "./DailyPortion";
import DailyPortionData from "./DailyPortionData";
import DailyCalculator from "./DailyCalculator";
import PortionsAdapter from "../../adapters/PortionsAdapter";

export default class DailyPortionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyTotal: 38,
      petPortionData: {},
      calculatedPortions: {
        boneContent: 0,
        muscleContent: 0,
      },
    };
  }

  componentDidMount() {
    const { petId } = this.props;
    PortionsAdapter.getPetPortions(petId).then((data) => {
      this.setState({
        petPortionData: data,
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    PortionsAdapter.getPetPortions(nextProps.petId).then((data) => {
      this.setState({
        petPortionData: data,
      });
    });
  }

  calculatePortion = (portionData) => {
    const boneContent = (portionData.ounces * portionData.bone) / 100;
    const muscleContent = portionData.ounces - boneContent;

    this.setState({
      calculatedPortions: {
        boneContent: (this.state.calculatedPortions.boneContent += boneContent),
        muscleContent: (this.state.calculatedPortions.muscleContent +=
          muscleContent),
      },
    });
  };

  render() {
    const { dailyTotal, petPortionData, calculatedPortions } = this.state;

    return (
      <React.Fragment>
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

          <div className="card">
            <div className="card-body">
              <DailyCalculator calculatePortion={this.calculatePortion} />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              {petPortionData && <DailyPortion {...petPortionData} />}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

DailyPortionContainer.propTypes = {
  petId: PropTypes.object,
};
