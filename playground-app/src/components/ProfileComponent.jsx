import React from "react";
import Photo from "../assets/photo.png";

const ProfileComponent = () => {
  return (
    <div className="Profile__container">
      <div className="Profile__card">
        <img className="Profile__img" src={Photo} alt="profile" />
        <div className="Profile__body">
          <h1>Roberto Javier Vallejo Molina</h1>
          <p>
            Committed, honest, responsible, trained professional, qualified to
            face with solvency the analysis, planning, design and control of
            electronic systems. Development of ERP systems, CRM, Web Servers,
            design and implementation of data storage solutions and database
            management. Professional with great capacity for work, integration,
            dynamism and ability to face challenging situations, with great
            imagination and initiative to develop new ideas and decision making.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
