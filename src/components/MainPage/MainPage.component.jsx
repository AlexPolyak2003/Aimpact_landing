import styles from "./MainPage.module.scss";
import { lazy } from "react";
import AboutUs from "../Pages/AboutUs/AboutUs.component";
import Direction_page from "../Pages/Directions/Directions.component";
import Industry from "../Pages/Industry/Industry.component";
import Project from "../Pages/Projects/Project.component";
import ActualProject from "../Pages/ActualProjects/ActualProject.component";
import Footer from "../Footer/Footer.component";
import Videoplayer from "../Videoplayer/Videoplayer.component";

const MyLazyComponent = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../Videoplayer/Videoplayer.component"));
      }, 3000);
    })
);

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <MyLazyComponent>
          <Videoplayer />
        </MyLazyComponent>
        <AboutUs />
        <Direction_page />
        <Industry />
        <Project />
        <ActualProject />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
