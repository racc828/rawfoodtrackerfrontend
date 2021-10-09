import React from "react";
import { Chart } from "react-google-charts";
import PropTypes from "prop-types";

const DailyPortion = ({
  muscle,
  bone,
  vegetable,
  liver,
  organ,
  nut,
  fruit,
}) => {
  return (
    <div>
      <Chart
        width={"800px"}
        height={"400px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        backgroundColor={"red"}
        data={[
          ["Category", "Percentage"],
          ["Muscle", muscle],
          ["Bone", bone],
          ["Vegetable", vegetable],
          ["Liver", liver],
          ["Organ", organ],
          ["Nuts", nut],
          ["Fruit", fruit],
        ]}
        options={{
          title: "Portions",
        }}
        rootProps={{ "data-testid": "7" }}
      />
    </div>
  );
};

export default DailyPortion;

DailyPortion.propTypes = {
  muscle: PropTypes.number,
  bone: PropTypes.number,
  vegetable: PropTypes.number,
  liver: PropTypes.number,
  organ: PropTypes.number,
  nut: PropTypes.number,
  fruit: PropTypes.number,
};
