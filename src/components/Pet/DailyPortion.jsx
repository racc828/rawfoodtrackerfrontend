import React from "react";

const DailyPortion = ({
  muscle,
  bone,
  vegetable,
  liver,
  secretingOrgan,
  nut,
  fruit,
}) => {
  //TODO do this on BE
  const portionData = {
    muscle,
    bone,
    vegetable,
    liver,
    secretingOrgan,
    nut,
    fruit,
  };

  let total = 0;
  return (
    <div>
      {Object.entries(portionData).map(([key, value], i) => {
        total += value;
        return (
          <div key={i}>
            {key} {value}
          </div>
        );
      })}
      {total}
    </div>
  );
};

export default DailyPortion;

//TODO add proptypes
