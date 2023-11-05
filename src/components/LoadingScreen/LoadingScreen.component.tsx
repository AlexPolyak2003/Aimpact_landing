import React from "react";
import styles from "./LoadingScreen.module.scss";
import logo from "../../icons/LoaderScreen/logo_vektor_sinie.svg";
import name from "../../icons/LoaderScreen/nazvaniye_vektor.svg";
import slogan from "../../icons/LoaderScreen/slogan_vektor.svg";

const LoadingPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.name}>
          <img src={name} alt="" />
        </div>

        <div className={styles.slogan}>
          <img src={slogan} alt="" />
        </div>
      </div>
    </div>
  );
};
export default LoadingPage;
