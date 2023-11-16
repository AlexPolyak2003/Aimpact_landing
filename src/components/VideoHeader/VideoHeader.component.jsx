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

  const item_1 = document.getElementById("item_1");
  const item_2 = document.getElementById("item_2");
  const item_3 = document.getElementById("item_3");
  const item_4 = document.getElementById("item_4");

  // const middle_content = document.getElementById("middle_content");

  // Первый элемент

  item_1?.addEventListener("mouseover", () => {
    item_2.style.opacity = "0.5";
    item_3.style.opacity = "0.5";
    item_4.style.opacity = "0.5";

    item_2.style.transition = "opacity 0.2s linear 0s";
    item_3.style.transition = "opacity 0.2s linear 0s";
    item_4.style.transition = "opacity 0.2s linear 0s";
  });

  item_1?.addEventListener("mouseout", () => {
    item_2.style.opacity = "1";
    item_3.style.opacity = "1";
    item_4.style.opacity = "1";
  });

  // Второй элемент

  item_2?.addEventListener("mouseover", () => {
    item_1.style.opacity = "0.5";
    item_3.style.opacity = "0.5";
    item_4.style.opacity = "0.5";

    item_1.style.transition = "opacity 0.2s linear 0s";
    item_3.style.transition = "opacity 0.2s linear 0s";
    item_4.style.transition = "opacity 0.2s linear 0s";
  });

  item_2?.addEventListener("mouseout", () => {
    item_1.style.opacity = "1";
    item_3.style.opacity = "1";
    item_4.style.opacity = "1";
  });

  // Третий элемент

  item_3?.addEventListener("mouseover", () => {
    item_1.style.opacity = "0.5";
    item_2.style.opacity = "0.5";
    item_4.style.opacity = "0.5";

    item_1.style.transition = "opacity 0.2s linear 0s";
    item_2.style.transition = "opacity 0.2s linear 0s";
    item_4.style.transition = "opacity 0.2s linear 0s";
  });

  item_3?.addEventListener("mouseout", () => {
    item_1.style.opacity = "1";
    item_2.style.opacity = "1";
    item_4.style.opacity = "1";
  });

  // Четвертый элемент

  item_4?.addEventListener("mouseover", () => {
    item_1.style.opacity = "0.5";
    item_2.style.opacity = "0.5";
    item_3.style.opacity = "0.5";

    item_1.style.transition = "opacity 0.2s linear 0s";
    item_2.style.transition = "opacity 0.2s linear 0s";
    item_3.style.transition = "opacity 0.2s linear 0s";
  });

  item_4?.addEventListener("mouseout", () => {
    item_1.style.opacity = "1";
    item_2.style.opacity = "1";
    item_3.style.opacity = "1";
  });

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
