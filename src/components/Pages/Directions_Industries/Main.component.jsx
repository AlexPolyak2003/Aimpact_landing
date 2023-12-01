import styles from "./Main.module.scss";
import { useState, useRef } from "react";
import Direction_page from "./Directions/Directions.component";
import Industry from "./Industries/Industry.component";
import mozg from "../../../icons/Directions/mozg.svg";
import React from "react";

const Main = () => {
  const button_1 = document.getElementById("btn_1");
  const button_2 = document.getElementById("btn_2");
  const [firstState, setFirstState] = useState(true);
  const [secondState, setSecondState] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [color, setColor] = useState(["#b0bde6", "#2d418d"]);
  const [underline, setUnderline] = useState(["#2d418d", "#b0bde6"]);

  const toggleFirstContent = () => {
    setIsActive(true);
    setFirstState(true);
    setSecondState(false);
  };

  const toggleSecondContent = () => {
    setIsActive(true);
    setFirstState(false);
    setSecondState(true);
  };

  const InitialContent = () => {
    return <Direction_page />;
  };

  const ChangedContent = () => {
    return <Industry />;
  };

  const handleClick = () => {
    if (!firstState) {
      setColor(["#b0bde6", "#2d418d"]);
      setUnderline(["#b0bde6", "#2d418d"]);
      toggleFirstContent();
    }
  };

  const handleClick_2 = () => {
    if (!secondState) {
      setColor(["#2d418d", "#b0bde6"]);
      setUnderline(["#2d418d", "#b0bde6"]);
      toggleSecondContent();
    }
  };

  return (
    <div id="directions" className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.left_box}>
          <div className={styles.titles}>
            <h1
              style={{ color: color[1] }}
              id="btn_1"
              ref={button_1}
              onClick={handleClick}
              className={styles.title_1}
            >
              направления
            </h1>

            <h1
              style={{ color: color[0] }}
              id="btn_2"
              ref={button_2}
              onClick={handleClick_2}
              className={styles.title_2}
            >
              индустрии
            </h1>
          </div>

          <div className={styles.mozg_position}>
            <img src={mozg} alt="мозг" />
          </div>
        </div>

        {secondState ? <ChangedContent /> : <InitialContent />}
      </div>

      {/* mobile */}

      <div className={styles.content_mobile}>
        <div className={styles.left_box}>
          <div className={styles.titles}>
            <h1
              style={{ color: color[1] }}
              id="btn_1"
              ref={button_1}
              onClick={handleClick}
              className={styles.title_1}
            >
              направления
            </h1>

            <h1
              style={{ color: color[0] }}
              id="btn_2"
              ref={button_2}
              onClick={handleClick_2}
              className={styles.title_2}
            >
              индустрии
            </h1>
          </div>
        </div>

        {secondState ? <ChangedContent /> : <InitialContent />}
      </div>
    </div>
  );
};
export default Main;
