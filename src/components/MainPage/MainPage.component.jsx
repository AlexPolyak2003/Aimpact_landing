import styles from "./MainPage.module.scss";
import { useState, useEffect } from "react";
import AboutUs from "../Pages/AboutUs/AboutUs.component";
import Project from "../Pages/Projects/Project.component";
import ActualProject from "../Pages/ActualProjects/ActualProject.component";
import Footer from "../Footer/Footer.component";
import { lazy, Suspense } from "react";
import Videoplayer from "../Videoplayer/Videoplayer.component";
import Main from "../Pages/Directions_Industries/Main.component";
import LoadingPage from "../LoadingScreen/LoadingScreen.component";

const MyLazyComponent = lazy(() =>
  import("../Videoplayer/Videoplayer.component")
);

const MainPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={styles.wrapper}>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className={styles.content}>
          <MyLazyComponent id="myVideo" async />

          {/* <Videoplayer /> */}
          <AboutUs />
          <Main />
          <Project />
          <ActualProject />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default MainPage;
