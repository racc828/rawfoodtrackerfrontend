import React from "react";
import PropTypes from "prop-types";
import PetsAdapter from "../../adapters/PetsAdapter";

export default class PetContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      portions: {},
    };
  }

  componentDidMount() {
    const { petId } = this.props;
    PetsAdapter.getPet(petId).then((data) => {
      debugger; // eslint-disable-line
      this.setState({
        portions: data,
      });
    });
  }

  handleSignUpClick = () => {
    this.setState({
      signUp: true,
    });
  };

  render() {
    return <div>container</div>;
  }
}

PetContainer.propTypes = {
  petId: PropTypes.number,
};
