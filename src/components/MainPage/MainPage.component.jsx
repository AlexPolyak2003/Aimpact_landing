import React from "react";
import styles from "./MainPage.module.scss";
// import VideoPlayer from "../VideoPlayer/VideoPlayer.component";
import { Suspense, lazy } from "react";
import Head from "../Header/Header.component";
import AboutUs from "../Pages/AboutUs/AboutUs.component";
import Direction_page from "../Pages/Directions/Directions.component";
import Industry from "../Pages/Industry/Industry.component";
import Project from "../Pages/Projects/Project.component";
import ActualProject from "../Pages/ActualProjects/ActualProject.component";
import Footer from "../Footer/Footer.component";

const MyLazyComponent = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("../LazyLoading/MyLazycomponent"));
      }, 3000);
    })
);

// const MyLazyComponent = lazy(() => import("../LazyLoading/MyLazycomponent"));

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Suspense>
        <div className={styles.content}>
          <Head />
          <MyLazyComponent />
          <AboutUs />
          <Direction_page />
          <Industry />
          <Project />
          <ActualProject />
          <Footer />
        </div>
      </Suspense>
    </div>
  );
};

export default MainPage;
