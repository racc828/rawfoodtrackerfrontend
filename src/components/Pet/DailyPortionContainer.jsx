import React from "react";
import PropTypes from "prop-types";
import DailyPortion from "./DailyPortion";
import DailyPortionData from "./DailyPortionData";
import DailyCalculator from "./DailyCalculator";

export default class DailyPortionContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      dailyTotal: 32,
    };
  }

  render() {
    const { petData } = this.props;
    const { dailyTotal } = this.state;
    const portionDataObject = petData.portions ? petData.portions[0] : {};

    return (
      <div>
        {portionDataObject && <DailyPortion {...portionDataObject} />}
        <div className="half">
          {Object.entries(portionDataObject).map(([key, value], i) => {
            if (key.includes("at") || key.includes("id")) {
              return null;
            } else {
              return (
                <DailyPortionData
                  key={i}
                  dailyTotal={dailyTotal}
                  category={key}
                  percentage={value}
                />
              );
            }
          })}
        </div>
        <div className="half">
          <DailyCalculator />
        </div>
      </div>
    );
  }
}

DailyPortionContainer.propTypes = {
  petData: PropTypes.object,
};
