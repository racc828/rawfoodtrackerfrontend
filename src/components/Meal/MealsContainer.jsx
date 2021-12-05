import React from "react";
import PropTypes from "prop-types";
import MealsAdapter from "../../adapters/MealsAdapter";

export default class MealsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      meals: [],
    };
  }

  componentDidMount() {
    const { petId } = this.props;
    MealsAdapter.getPetMeals(petId).then((data) => {
      this.setState({
        meals: data,
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">hi</div>
      </React.Fragment>
    );
  }
}

MealsContainer.propTypes = {
  petId: PropTypes.string,
};
