import styles from "./VideoHeader.module.scss";
import beloe_logo from "../../icons/Header/beloe_logo.svg";
import { useEffect, useState } from "react";

const VideoHeader = () => {
  const [color, setColor] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 620) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div
      className={
        color ? `${styles.wrapper} ${styles["wrapper-bg"]}` : styles.wrapper
      }
    >
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={beloe_logo} alt="" />
        </div>
        <div className={styles.middle_content}>
          <div className={styles.item}>о нас</div>
          <div className={styles.item}> сферы деятельности</div>
          <div className={styles.item}>кейсы</div>
          <div className={styles.item}>контакты</div>
        </div>

        <div className={styles.phone_number}>
          <h1>+7 xxx xxx xxxx</h1>
        </div>
      </div>
    </div>
  );
};

export default VideoHeader;
