import React from "react";
import playBtn from "../../../assets/images/about-play.png";

const StoryVideo = () => {
  return (
    <section className="story-video">
      <div className="story-play" onClick={() => {}}>
        <img src={playBtn} alt="play-button" />
        <p>Watch our story</p>
      </div>
    </section>
  );
};

export default StoryVideo;
