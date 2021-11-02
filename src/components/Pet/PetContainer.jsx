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

    // prettier-ignore
    console.log(`%cpetdata`, 'background: #FF1493; color: #fff; padding: 3px;', petData); // eslint-disable-line

    return (
      <div>
        {petData && !petData.hasPortion && (
          <div className="half">
            <DailyPortionForm petId={petId} />
          </div>
        )}

        {petData && petData.hasPortion && (
          <div className="half">
            <DailyPortionContainer petId={petId} />
          </div>
        )}
      </div>
    );
  }
}

PetContainer.propTypes = {
  petId: PropTypes.string,
};
