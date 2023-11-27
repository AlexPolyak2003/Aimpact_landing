import React, { ReactElement } from "react";
import styles from "./VideoHeader.module.scss";
import beloe_logo from "../../icons/Header/beloe_logo.svg";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const VideoHeader = (): ReactElement => {
  const [color, setColor] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const item_1: any = document.getElementById("item_1");
  const item_2: any = document.getElementById("item_2");
  const item_3: any = document.getElementById("item_3");
  const item_4: any = document.getElementById("item_4");

  return (
    <div
      className={
        color ? `${styles.wrapper} ${styles["wrapper-bg"]}` : styles.wrapper
      }
    >
      <div className={styles.content}>
        <Link
          to="logo"
          spy={true}
          smooth={true}
          duration={1000}
          className={styles.logo}
        >
          <img src={beloe_logo} alt="" />
        </Link>

        <nav id="middle_content" className={styles.middle_content}>
          <Link
            id="item_4"
            to="about_us"
            spy={true}
            smooth={true}
            duration={1000}
            className={styles.item}
            // onMouseOver={f1}
            // onMouseOut={f2}
          >
            о нас
          </Link>
          <Link
            id="item_1"
            to="directions"
            spy={true}
            smooth={true}
            duration={1000}
            className={styles.item_long}
            // onMouseOver={changeItem}
            // onMouseOut={rechangeItem}
          >
            сферы деятельности
          </Link>
          <Link
            id="item_3"
            to="cases"
            spy={true}
            smooth={true}
            duration={1000}
            className={styles.item}
            // onMouseOver={f5}
            // onMouseOut={f6}
          >
            кейсы
          </Link>

          <Link
            id="item_2"
            to="contacts"
            spy={true}
            smooth={true}
            duration={1000}
            className={styles.item_contact}
            // onMouseOver={f7}
            // onMouseOut={f8}
          >
            контакты
          </Link>
        </nav>

        <div className={styles.phone_number}>
          <h1>+7 xxx xxx xxxx</h1>
        </div>
      </div>
    </div>
  );
};

export default VideoHeader;
