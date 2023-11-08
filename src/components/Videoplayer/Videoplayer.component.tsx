import styles from "./Videoplayer.module.scss";
import video from "../../../src/videos/Video_2.mp4";
import beloe_logo from "../../icons/Header/beloe_logo.svg";
import VideoHeader from "../VideoHeader/VideoHeader.component";

const Videoplayer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <VideoHeader />

        <div className={styles.main_text}>
          <div className={styles.main_title}>
            <h1>повышаем эффективность с помощью AI</h1>
          </div>
        </div>

        <video loop autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Videoplayer;
