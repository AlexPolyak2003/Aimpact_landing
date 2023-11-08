import styles from "./Videoplayer.module.scss";
import video from "../../../src/videos/Video_2.mp4";

const Videoplayer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>Hello world</p>
        </div>

        <video loop autoPlay muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Videoplayer;
