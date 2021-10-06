import React from "react";
import PropTypes from "prop-types";
import DailyPortion from "./DailyPortion";

export default class DailyPortionContainer extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { petData } = this.props;
    const portionDataObject = petData.portions ? petData.portions[0] : {};

    return (
      <div>{portionDataObject && <DailyPortion {...portionDataObject} />}</div>
    );
  }
}

DailyPortionContainer.propTypes = {
  petData: PropTypes.object,
};
