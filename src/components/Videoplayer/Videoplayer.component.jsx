import React, { useState, useEffect, Suspense } from "react";
import styles from "./Videoplayer.module.scss";
import video from "../../../src/videos/video_var.mp4";
import VideoHeader from "../VideoHeader/VideoHeader.component";
import SliderComponent from "../Slider/Slider_desktop/Slider.component";
import SliderMobile from "../Slider/Slider_mobile/Slider_mobile.component";
import LazyLoad from "react-lazy-load";

const Videoplayer = () => {
  return (
    <div id="logo" className={styles.wrapper}>
      <div className={styles.content}>
        <VideoHeader />

        <div className={styles.main_text}>
          <div className={styles.main_title}>
            <h1>
              повышаем эффективность <br /> с помощью AI
            </h1>
          </div>

          <div className={styles.slider_position}>
            <SliderComponent />
          </div>

          <div className={styles.slider_mobile}>
            <SliderMobile />
          </div>
        </div>

        <LazyLoad offset={100} once>
          <video
            id="videoPlayer"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={video} type="video/mp4" />
          </video>
        </LazyLoad>
      </div>
    </div>
  );
};

export default Videoplayer;
