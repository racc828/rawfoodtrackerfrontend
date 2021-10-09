import React from "react";
import PropTypes from "prop-types";

const DailyPortionData = ({ category, percentage, dailyTotal }) => {
  const ounces = (dailyTotal * percentage) / 100;

  return (
    <div>
      <div>
        {category} : {percentage}%
      </div>
      {ounces} oz
    </div>
  );
};

export default DailyPortionData;

DailyPortionData.propTypes = {
  category: PropTypes.string,
  percentage: PropTypes.number,
  dailyTotal: PropTypes.number,
};
