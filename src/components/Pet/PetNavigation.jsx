import React from "react";
import Button from "../Button/Button";

const PetNavigation = ({ currentUser, setActivePet }) => {
  return (
    <div className="pet-navigation">
      {currentUser.pets.map((pet, i) => {
        return (
          <Button
            classsName="button button-secondary"
            text={pet.name}
            key={i}
            id={pet.id}
            onClick={setActivePet}
          />
        );
      })}
    </div>
  );
};

export default PetNavigation;
