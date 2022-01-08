import React from "react";
import { teamCards } from "../../../data";
import Button from "../../Button";

const Team = () => {
  return (
    <section className="team">
      <div className="container">
        <h2>MEET OUR AMAZING TEAM</h2>
        <p>Lorem ipsum dolor sit amet proin gravida nibh vel velit</p>
        <div className="team-cards">
          {teamCards.map((card) => {
            const { image, name, job, id } = card;
            return (
              <div key={id} className={`team-card team-card-${id}`}>
                <img src={image} alt="team-person" />
                <p>{name}</p>
                <p>
                  <span>{job}</span>
                </p>
              </div>
            );
          })}
        </div>
        <p>Become part of our dream team, let&#39;s join us ! </p>
        <Button name="we are hiring" onClick={() => {}} />
      </div>
    </section>
  );
};

export default Team;
