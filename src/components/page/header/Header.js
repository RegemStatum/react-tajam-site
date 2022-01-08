import React from "react";
import HomeHeader from "./HomeHeader";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
import logo from "../../../assets/images/logo.png";
import { useGlobalContext } from "../../../context";

const Header = () => {
  const { isHomePage } = useGlobalContext();
  const headerRef = React.useRef(null);

  return (
    <header ref={headerRef} className="header">
      <div className="container">
        <div className="top-menu">
          <img src={logo} alt="tajam" className="logo" />
          <Navigation />
          <MobileMenu />
        </div>
        {isHomePage && <HomeHeader headerRef={headerRef} />}
      </div>
    </header>
  );
};

export default Header;
