import React from "react";
import { useEffect, useState } from "react";
import styles from "./App.module.scss";
import LoadingPage from "./components/LoadingScreen/LoadingScreen.component";
import MainPage from "./components/MainPage/MainPage.component";
import { Suspense, lazy } from "react";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className={styles.wrapper}>
      <Suspense>
        {/* <MyLazyComponent /> */}
        {loading ? (
          <LoadingPage />
        ) : (
          <div className={styles.content}>
            <MainPage />
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default App;
