import styles from "./VideoHeader.module.scss";
import beloe_logo from "../../icons/Header/beloe_logo.svg";
import { useEffect } from "react";
import { useState } from "react";

const VideoHeader = () => {
  return (
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
  );
};

export default VideoHeader;
