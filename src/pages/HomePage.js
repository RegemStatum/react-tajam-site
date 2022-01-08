import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
//PAGE_COMPONENTS
import Story from "../components/page/story/Story";
import StoryVideo from "../components/page/story/StoryVideo";
import Expertise from "../components/page/expertise/Expertise";
import Team from "../components/page/team/Team";
import Works from "../components/page/works/Works";
import PeopleSay from "../components/page/peopleSay/PeopleSay";
import Contact from "../components/page/contact/Contact";
//SCSS_FOR_HOME_PAGE even if component doesnt render sass will use this styles
// import "../assets/scss/pages/_home.scss";

const HomePage = () => {
  const { setIsHomePage } = useGlobalContext();

  useEffect(() => {
    setIsHomePage(true);
    return () => {
      setIsHomePage(false);
    };
  }, [setIsHomePage]);
  return (
    <div className="home-page">
      <Story />
      <StoryVideo />
      <Expertise />
      <Team />
      <Works />
      <PeopleSay />
      <Contact />
    </div>
  );
};

export default HomePage;
