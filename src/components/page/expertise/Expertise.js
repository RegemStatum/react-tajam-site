import React from "react";
import { expertiseCards } from "../../../data";

const Expertise = () => {
  return (
    <section className="expertise container">
      <h2>Expertise</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
      <div className="expertise-cards">
        {expertiseCards.map((card) => {
          const { icon, heading, text, id } = card;

          return (
            <div key={id} className={`expertise-card expertise-card-${id}`}>
              <img src={icon} alt="expertise-card-icon" />
              <h4>{heading}</h4>
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Expertise;
