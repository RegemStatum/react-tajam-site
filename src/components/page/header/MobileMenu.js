import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../../../context";

const MobileMenu = () => {
  const { linksRef, linksContainerRef, isMenuActive, setIsMenuActive } =
    useGlobalContext();

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (isMenuActive) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [isMenuActive, linksContainerRef, linksRef]);

  return (
    <div
      className="mobile-menu"
      onClick={() => {
        setIsMenuActive(!isMenuActive);
      }}
    >
      <FaBars />
    </div>
  );
};

export default MobileMenu;
