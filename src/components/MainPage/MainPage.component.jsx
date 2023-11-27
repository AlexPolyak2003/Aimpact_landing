import styles from "./MainPage.module.scss";
import React from "react";
import AboutUs from "../Pages/AboutUs/AboutUs.component";
import Project from "../Pages/Projects/Project.component";
import ActualProject from "../Pages/ActualProjects/ActualProject.component";
import Footer from "../Footer/Footer.component";
import { lazy, Suspense } from "react";
import Videoplayer from "../Videoplayer/Videoplayer.component";
import Main from "../Pages/Directions_Industries/Main.component";

// const MyLazyComponent = lazy(() =>
//   import("../Videoplayer/Videoplayer.component")
// );

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <Suspense>
        <div className={styles.content}>
          {/* <MyLazyComponent />
           */}
          <Videoplayer />
          <AboutUs />
          <Main />
          <Project />
          <ActualProject />
          <Footer />
        </div>
      </Suspense>
    </div>
  );
};

export default MainPage;
