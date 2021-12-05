import React from "react";
import PropTypes from "prop-types";
import PetsAdapter from "../../adapters/PetsAdapter";
import DailyPortionForm from "../Forms/DailyPortionForm";
import MealContainer from "../Meal/MealContainer";
import MealsContainer from "../Meal/MealsContainer";
import PortionsAdapter from "../../adapters/PortionsAdapter";
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

    PortionsAdapter.getPetPortions(petId).then((data) => {
      this.setState({
        petPortionData: data,
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    PetsAdapter.getPet(nextProps.petId).then((data) => {
      this.setState({
        petData: data,
      });
    });

    PortionsAdapter.getPetPortions(nextProps.petId).then((data) => {
      this.setState({
        petPortionData: data,
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
    const { petData, petPortionData } = this.state;

    return (
      <React.Fragment>
        <Tabs>
          <TabList>
            <Tab>Daily Portions Form</Tab>
            <Tab>Calendar</Tab>
            <Tab>Meal Form</Tab>
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
          <TabPanel> Calendar</TabPanel>
          <TabPanel>
            <MealContainer petPortionData={petPortionData} petId={petId} />
          </TabPanel>
          <TabPanel>
            <MealsContainer petId={petId} />
          </TabPanel>
        </Tabs>
      </React.Fragment>
    );
  }
}

PetContainer.propTypes = {
  petId: PropTypes.string,
};
