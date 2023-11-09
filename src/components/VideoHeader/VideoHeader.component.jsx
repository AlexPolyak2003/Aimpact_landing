import styles from "./VideoHeader.module.scss";
import beloe_logo from "../../icons/Header/beloe_logo.svg";
import { useEffect, useState } from "react";

const VideoHeader = () => {
  const [color, setColor] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
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
          <div className={styles.item}>О нас</div>
          <div className={styles.item}> Сферы деятельности</div>
          <div className={styles.item}>Кейсы</div>
          <div className={styles.item}>Контакты</div>
        </div>

        <div className={styles.phone_number}>+7 xxx xxx xxxx</div>
      </div>
    </div>
  );
};

export default VideoHeader;
