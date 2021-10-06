import React from "react";
import PropTypes from "prop-types";
import PetsAdapter from "../../adapters/PetsAdapter";
import DailyPortionForm from "../Forms/DailyPortionForm";
import DailyPortionContainer from "../Pet/DailyPortionContainer";

export default class PetContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      petData: {},
    };
  }

  componentDidMount() {
    const { petId } = this.props;
    PetsAdapter.getPet(petId).then((data) => {
      this.setState({
        petData: data,
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    PetsAdapter.getPet(nextProps.petId).then((data) => {
      this.setState({
        petData: data,
      });
    });
  }

  handleSignUpClick = () => {
    this.setState({
      signUp: true,
    });
  };

  render() {
    const { petId } = this.props;
    const { petData } = this.state;
    return (
      <div>
        <div className="half">
          <DailyPortionForm petId={petId} />
        </div>
        <div className="half">
          <DailyPortionContainer petData={petData} />
        </div>
      </div>
    );
  }
}

PetContainer.propTypes = {
  petId: PropTypes.string,
};
