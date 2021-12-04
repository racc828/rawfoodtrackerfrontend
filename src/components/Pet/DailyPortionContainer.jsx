import React from "react";
import PropTypes from "prop-types";
import DailyPortionData from "./DailyPortionData";

const DailyPortionContainer = ({
  dailyTotal,
  petPortionData,
  calculatedPortions,
}) => {
  return (
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
  );
};

export default DailyPortionContainer;

DailyPortionContainer.propTypes = {
  dailyTotal: PropTypes.string,
  petPortionData: PropTypes.object,
  calculatedPortions: PropTypes.object,
};
