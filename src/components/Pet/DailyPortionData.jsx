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
    if (calculatedPortions) {
      if (category === "bone") {
        const newVal = ounces - calculatedPortions.bone;
        return parseFloat(newVal.toFixed(2));
      } else if (category === "muscle") {
        const newVal = ounces - calculatedPortions.muscles;
        return parseFloat(newVal.toFixed(2));
      } else if (category === "liver") {
        const newVal = ounces - calculatedPortions.livers;
        return parseFloat(newVal.toFixed(2));
      } else if (category === "fruit") {
        const newVal = ounces - calculatedPortions.fruits;
        return parseFloat(newVal.toFixed(2));
      } else if (category === "organ") {
        const newVal = ounces - calculatedPortions.organs;
        return parseFloat(newVal.toFixed(2));
      } else if (category === "nut") {
        const newVal = ounces - calculatedPortions.nuts;
        return parseFloat(newVal.toFixed(2));
      } else if (category === "vegetable") {
        const newVal = ounces - calculatedPortions.veggies;
        return parseFloat(newVal.toFixed(2));
      }
    } else {
      return ounces;
    }
  };

  const newOunces = totalOunces();

  return (
    <li class="list-group-item">
      {category} : {percentage}% -- {newOunces}
    </li>
  );
};

export default DailyPortionData;

DailyPortionData.propTypes = {
  category: PropTypes.string,
  percentage: PropTypes.number,
  dailyTotal: PropTypes.number,
};
