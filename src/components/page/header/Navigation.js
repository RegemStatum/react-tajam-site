import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";
import { links } from "../../../data";

const Navigation = () => {
  const { linksRef, linksContainerRef, setIsMenuActive } = useGlobalContext();

  return (
    <nav className="links-container" ref={linksContainerRef}>
      <ul className="links" ref={linksRef}>
        {links.map((link) => {
          const { name, id, to } = link;
          return (
            <Link to={to} key={id}>
              <li
                onClick={() => {
                  setIsMenuActive(false);
                }}
              >
                {name}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
