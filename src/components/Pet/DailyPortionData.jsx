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
      const newVal = ounces - calculatedPortions.bone;
      return parseFloat(newVal.toFixed(2));
    } else if (category === "muscle" && calculatedPortions) {
      const newVal = ounces - calculatedPortions.muscle;
      return parseFloat(newVal.toFixed(2));
    } else {
      return ounces;
    }
  };

  return (
    <li class="list-group-item">
      {category} : {percentage}% -- {totalOunces()}
    </li>
  );
};

export default DailyPortionData;

DailyPortionData.propTypes = {
  category: PropTypes.string,
  percentage: PropTypes.number,
  dailyTotal: PropTypes.number,
};
