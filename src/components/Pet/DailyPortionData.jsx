import React from "react";
import PropTypes from "prop-types";

const DailyPortionData = ({
  category,
  percentage,
  dailyTotal,
  calculatedPortions,
}) => {
  const ounces = (dailyTotal * percentage) / 100;

  const totalOunces = () => {
    if (category === "bone" && calculatedPortions) {
      const newVal = ounces - calculatedPortions.boneContent;
      return parseFloat(newVal.toFixed(2));
    } else if (category === "muscle" && calculatedPortions) {
      const newVal = ounces - calculatedPortions.muscleContent;
      return parseFloat(newVal.toFixed(2));
    } else {
      return ounces;
    }
  };

  return (
    <div>
      <div>
        {category} : {percentage}%
      </div>
      {totalOunces()} oz
    </div>
  );
};

export default DailyPortionData;

DailyPortionData.propTypes = {
  category: PropTypes.string,
  percentage: PropTypes.number,
  dailyTotal: PropTypes.number,
};
