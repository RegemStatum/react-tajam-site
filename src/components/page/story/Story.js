import React from "react";
import Button from "../../Button";
import aboutImg from "../../../assets/images/about-img.png";

const Story = () => {
  return (
    <section className="story container">
      <div className="story-inf">
        <img className={"about-img"} src={aboutImg} alt="about" />

        <div className="story-text">
          <h2>Our story</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            quia ullam vero dolor repellendus dolorem cupiditate ex incidunt?
            Distinctio, repellendus magnam dolorem asperiores repellat provident
            a rem consequatur sequi rerum.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel natus
            tempora quidem repellat, accusamus iusto neque iste assumenda
            sapiente numquam velit eius adipisci quam ducimus ut ab, odio optio.
            Adipisci.
          </p>
          <Button name={"Learn more"} onClick={() => {}} />
        </div>
      </div>
    </section>
  );
};

export default Story;
