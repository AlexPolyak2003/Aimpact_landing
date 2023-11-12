import styles from "./VideoHeader.module.scss";
import beloe_logo from "../../icons/Header/beloe_logo.svg";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const VideoHeader = () => {
  const [color, setColor] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 20) {
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
        <Link
          to="logo"
          spy={true}
          smooth={true}
          duration={1000}
          className={styles.logo}
        >
          <img src={beloe_logo} alt="" />
        </Link>

        <nav className={styles.middle_content}>
          <Link
            to="about_us"
            spy={true}
            smooth={true}
            duration={1000}
            className={styles.item}
          >
            о нас
          </Link>
          <Link
            to="directions"
            spy={true}
            smooth={true}
            duration={1000}
            className={styles.item_long}
          >
            сферы деятельности
          </Link>
          <Link
            to="cases"
            spy={true}
            smooth={true}
            duration={1000}
            className={styles.item}
          >
            кейсы
          </Link>

          <Link
            to="contacts"
            spy={true}
            smooth={true}
            duration={1000}
            className={styles.item_contact}
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
