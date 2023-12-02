import styles from './Main.module.scss';
import { useState, useRef } from 'react';
import DirectionPage from './Directions/Directions.component';
import Industry from './Industries/Industry.component';
import mozg from '../../../icons/Directions/mozg.svg';

const Main = () => {
  const [firstState, setFirstState] = useState(true);
  const [secondState, setSecondState] = useState(false);
  const button_1 = useRef();
  const button_2 = useRef();

  const handleClick = () => {
    setFirstState(true);
    setSecondState(false);
  };

  const handleClick_2 = () => {
    setFirstState(false);
    setSecondState(true);
  };

  const InitialContent = () => {
    return <DirectionPage className={styles.hidden} />;
  };

  const ChangedContent = () => {
    return <Industry />;
  };

  return (
    <div id="directions" className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.left_box}>
          <div className={styles.titles}>
            <h1
              id="btn_1"
              ref={button_1}
              onClick={handleClick}
              className={firstState ? styles.active : styles.title_1}>
              направления
            </h1>

            <h1
              id="btn_2"
              ref={button_2}
              onClick={handleClick_2}
              className={secondState ? styles.active : styles.title_2}>
              индустрии
            </h1>
          </div>

          <div className={styles.mozg_position}>
            <img src={mozg} alt="мозг" />
          </div>
        </div>

        {secondState ? <ChangedContent /> : <DirectionPage />}
      </div>

      {/* mobile */}

      <div className={styles.content_mobile}>
        <div className={styles.left_box}>
          <div className={styles.titles}>
            <h1
              id="btn_1"
              ref={button_1}
              onClick={handleClick}
              className={firstState ? styles.active : styles.title_1}>
              направления
            </h1>

            <h1
              id="btn_2"
              ref={button_2}
              onClick={handleClick_2}
              className={secondState ? styles.active : styles.title_2}>
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
