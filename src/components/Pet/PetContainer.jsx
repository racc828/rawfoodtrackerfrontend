import React from "react";
import PropTypes from "prop-types";
import PetsAdapter from "../../adapters/PetsAdapter";
import DailyPortionForm from "../Forms/DailyPortionForm";
import DailyPortionContainer from "../Pet/DailyPortionContainer";
import MealContainer from "../Meal/MealContainer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
      <React.Fragment>
        <Tabs>
          <TabList>
            <Tab>Daily Portions</Tab>
            <Tab>Raw Meaty Bones</Tab>
            <Tab>Calendar</Tab>
            <Tab>Meals</Tab>
          </TabList>

          <TabPanel>
            {petData && !petData.hasPortion && (
              <div className="card">
                <div className="card-body">
                  <DailyPortionForm petId={petId} />
                </div>
              </div>
            )}
          </TabPanel>
          <TabPanel>
            {petData && petData.hasPortion && (
              <DailyPortionContainer petId={petId} />
            )}
          </TabPanel>
          <TabPanel> Calendar</TabPanel>
          <TabPanel>
            <MealContainer petId={petId} />
          </TabPanel>
        </Tabs>
      </React.Fragment>
    );
  }
}

PetContainer.propTypes = {
  petId: PropTypes.string,
};
