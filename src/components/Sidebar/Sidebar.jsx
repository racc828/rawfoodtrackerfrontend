import React from "react";
import "../../global/css/sidebar.scss";
import Button from "../Button/Button";

const Sidebar = ({ currentUser, setActivePet }) => {
  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        {currentUser &&
          currentUser.pets &&
          currentUser.pets.map((pet, i) => {
            return (
              <li className="sidebar-nav-item">
                <Button
                  className="button button-transparent"
                  key={i}
                  id={pet.id}
                  onClick={setActivePet}
                  text={pet.name}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Sidebar;
