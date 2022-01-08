import React, { useEffect, useState } from "react";
import Button from "../../Button";
import { AiOutlineRight } from "react-icons/ai";
import { workList } from "../../../data";

const Works = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [workListSize, setWorkListSize] = useState(workList.length / 3);

  const checkSize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);

    if (windowSize <= 720) {
      setWorkListSize(workList.length / 3);
    }
    if (windowSize >= 720 && windowSize < 960) {
      setWorkListSize(workList.length / 2);
    }
    if (windowSize >= 960) {
      setWorkListSize(workList.length / 2);
    }

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [windowSize]);

  return (
    <section className="works">
      <div className="heading container">
        <h2>Our works</h2>
        <a href="/">
          See All Projects in dribbble <AiOutlineRight />
        </a>
      </div>
      <div className="work-list">
        {workList.map((item) => {
          const { id } = item;

          if (id <= workListSize) {
            return (
              <div
                key={id}
                className={`work-list-item work-list-item-${id}`}
              ></div>
            );
          } else {
            return null;
          }
        })}
      </div>
      <Button
        name="load more"
        onClick={() => {
          setWorkListSize(workList.length);
        }}
      />
    </section>
  );
};

export default Works;
