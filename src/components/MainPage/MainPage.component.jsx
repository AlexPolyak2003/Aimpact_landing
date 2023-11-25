import styles from "./MainPage.module.scss";
import React from "react";
import AboutUs from "../Pages/AboutUs/AboutUs.component";
import Project from "../Pages/Projects/Project.component";
import ActualProject from "../Pages/ActualProjects/ActualProject.component";
import Footer from "../Footer/Footer.component";
// import Videoplayer from "../Videoplayer/Videoplayer.component";
import Main from "../Pages/Directions_Industries/Main.component";

const MyLazyComponent = React.lazy(() =>
  import("../Videoplayer/Videoplayer.component")
);

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {/* <MyLazyComponent> */}
        <React.Suspense>
          <MyLazyComponent />
        </React.Suspense>
        {/* </MyLazyComponent> */}
        <AboutUs />
        <Main />
        <Project />
        <ActualProject />
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
