import React, { useState, useEffect, useRef } from "react";
import Button from "../../Button";
import { headerInf } from "../../../data";

const HomeHeader = ({ headerRef }) => {
  const [currentInf, setCurrentInf] = useState(headerInf[0]);
  const { id, text } = currentInf;
  const infText = useRef(null);

  useEffect(() => {
    let interval = setInterval(() => {
      let newId = id;
      if (newId > headerInf.length - 1) {
        newId = 0;
      }
      infText.current.style.opacity = "0";

      setTimeout(() => {
        setCurrentInf(headerInf[newId]);
        infText.current.style.opacity = "1";
      }, 300);
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  }, [currentInf, id]);

  useEffect(() => {
    const header = headerRef.current;
    header.classList.add("with-home-header");
    return () => {
      header.classList.remove("with-home-header");
    };
  }, [headerRef]);

  return (
    <div className="home-header">
      <h1>We are awesome creative agency</h1>
      <p ref={infText}>{text}</p>
      <Button onClick={() => {}} name={"Learn More"} />
      <div className="swap-markers">
        {headerInf.map((marker) => {
          return (
            <div
              key={marker.id}
              className={`marker marker-${marker.id} ${
                marker.id === id ? "highlighted" : ""
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeHeader;
