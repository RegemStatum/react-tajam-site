import React, { useState, useCallback, useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { testimonialsList } from "../../../data";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const PeopleSay = () => {
  const [curId, setCurId] = useState(3);

  const setTestimClass = (id) => {
    if (curId === 1) {
      if (id === testimonialsList.length) {
        return "prev";
      }
    }

    if (id === curId) {
      return "active";
    } else if (id === curId - 1) {
      return "prev";
    } else {
      return "next";
    }
  };

  const changeId = useCallback(
    (operation) => {
      if (operation === "+") {
        if (curId === testimonialsList.length) {
          setCurId(1);
        } else {
          setCurId(curId + 1);
        }
      }
      if (operation === "-") {
        if (curId === 1) {
          setCurId(testimonialsList.length);
        } else {
          setCurId(curId - 1);
        }
      }
    },
    [curId]
  );

  //We need another type of slider to use this functionality absolutely correct
  // const onImageClick = (id) => {
  //   setCurId(id);
  //   setTestimClass(id);
  // };

  useEffect(() => {
    let timeout = setTimeout(() => {
      changeId("+");
    }, 8000);

    return () => {
      clearTimeout(timeout);
    };
  }, [curId, changeId]);

  return (
    <section className="people-say">
      <div className="container center">
        <RiDoubleQuotesL></RiDoubleQuotesL>
        <div className="testim-container">
          {testimonialsList.map((testim) => {
            const { id, name, job, text } = testim;
            return (
              <div
                key={id}
                className={`testim testim-${id} ${setTestimClass(id)}`}
              >
                <p>{text}</p>
                <p>
                  <span>{name}</span>
                </p>
                <p>{job}</p>
              </div>
            );
          })}
        </div>
        <div className="testim-control">
          <AiOutlineLeft onClick={() => changeId("-")} />
          {testimonialsList.map((testim) => {
            return (
              <img
                // onClick={() => {
                //   onImageClick(testim.id);
                // }}
                key={testim.id}
                className={`testim-image testim-image-${
                  testim.id
                } ${setTestimClass(testim.id)}`}
                src={testim.image}
                alt="tesimonial-person"
              />
            );
          })}
          <AiOutlineRight onClick={() => changeId("+")} />
        </div>
      </div>
    </section>
  );
};

export default PeopleSay;
