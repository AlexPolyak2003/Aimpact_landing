import styles from "./Videoplayer.module.scss";
import video from "../../../src/videos/videofon.mp4";
import video_mobile from "../../../src/videos/PHONE.mp4";
import VideoHeader from "../VideoHeader/VideoHeader.component";
import SliderComponent from "../Slider/Slider_desktop/Slider.component";
import SliderMobile from "../Slider/Slider_mobile/Slider_mobile.component";

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

        <video loop autoPlay muted playsinline>
          <source src={video} type="video/mp4" />
          <source src={video_mobile} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Videoplayer;
