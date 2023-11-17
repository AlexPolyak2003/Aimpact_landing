import styles from "./Main.module.scss";
import { useState } from "react";
import Direction_page from "./Directions/Directions.component";
import Industry from "./Industries/Industry.component";
import mozg from "../../../icons/Directions/mozg.svg";

const Main = () => {
  const click_1: any = document.getElementById("btn_1");
  const click_2: any = document.getElementById("btn_2");
  const [firstState, setFirstState] = useState(true);
  const [secondState, setSecondState] = useState(false);

  const [firstTitle, setfirstTitle] = useState(true);
  const [secondTitle, setsecondTitle] = useState(false);

  const toggleFirstContent = () => {
    setFirstState(true);
    setSecondState(false);
  };

  const toggleSecondContent = () => {
    setFirstState(false);
    setSecondState(true);
  };

  const InitialContent = () => {
    return <Direction_page />;
  };

  const ChangedContent = () => {
    return <Industry />;
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.left_box}>
          <div className={styles.titles}>
            <h1
              id="btn_1"
              onClick={toggleFirstContent}
              className={styles.title_1}
            >
              направления
            </h1>
            <h1
              id="btn_2"
              onClick={toggleSecondContent}
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
    </div>
  );
};

export default Main;
