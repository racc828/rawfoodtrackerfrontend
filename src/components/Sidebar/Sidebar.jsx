import React from "react";
import "../../global/css/sidebar.scss";

const Sidebar = ({ currentUser, setActivePet }) => {
  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        {currentUser.pets.map((pet, i) => {
          return (
            <li className="sidebar-nav-item">
              <a
                className="sidebar-nav-item-link"
                key={i}
                id={pet.id}
                onClick={setActivePet}
              >
                {pet.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
