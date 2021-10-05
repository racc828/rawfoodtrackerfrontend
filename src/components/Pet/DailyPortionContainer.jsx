import React from "react";
import PropTypes from "prop-types";

export default class DailyPortionContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      portions: {},
    };
  }

  render() {
    const { petData } = this.props;
    const portionDataObject = petData.portions ? petData.portions[0] : {};

    //TODO do this on BE
    const portionData = {
      muscle: portionDataObject.muscle,
      bone: portionDataObject.bone,
      vegetable: portionDataObject.vegetable,
      liver: portionDataObject.liver,
      secretingOrgan: portionDataObject.secretingOrgan,
      nut: portionDataObject.nut,
      fruit: portionDataObject.fruit,
    };

    // prettier-ignore
    console.log(`%cportinData`, 'background: #FF1493; color: #fff; padding: 3px;', portionData); // eslint-disable-line
    let total = 0;

    return (
      <div>
        {Object.entries(portionData).map(([key, value]) => {
          total += value;
          return (
            <div>
              {key} {value}
            </div>
          );
        })}
        {total}
      </div>
    );
  }
}

DailyPortionContainer.propTypes = {
  petData: PropTypes.object,
};
