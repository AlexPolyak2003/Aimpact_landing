import React, { FC, ReactNode } from "react";
// import VideoPlayer from "../VideoPlayer/VideoPlayer.component";
import styles from "./MyLazycomponent.module.scss";
import Head from "../Header/Header.component";

const MyLazyComponent = () => {
  return (
    <div className={styles.box}>
      {/* <h1>Hello World!</h1> */}

      {/* <VideoPlayer className={styles.video} /> */}
    </div>
  );
};

export default MyLazyComponent;
