import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";

const NewPotentialMeal = ({ foodTypes, deleteMealPortionData }) => {
  return (
    <div>
      {foodTypes.map((food) => {
        return (
          <div>
            {food.name} {food.ounces}oz
            <Button
              type="button"
              onClick={() => deleteMealPortionData(food.uniqueId)}
              className="button button-transparent pad-0"
              icon="trash"
            />
          </div>
        );
      })}
    </div>
  );
};

export default NewPotentialMeal;

NewPotentialMeal.propTypes = {
  foodTypes: PropTypes.array,
  deleteMealPortionData: PropTypes.func,
};
