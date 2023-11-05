import styles from "./ActualProject.module.scss";
import gazprom from "../../../icons/ActualProjects/gazprom neft.svg";
import vnukovo from "../../../icons/ActualProjects/vnykovo.svg";
import zarubezneft from "../../../icons/ActualProjects/zarubezneft.svg";

const ActualProject = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.border_top}></div>
        <div className={styles.main_content}>
          <div className={styles.title}>
            <h1>актуальные проекты</h1>
          </div>

          <div className={styles.gazprom_position}>
            <div className={styles.gazprom}>
              <img src={gazprom} alt="газпром" />
              <h1>Газпром Нефть</h1>
            </div>
          </div>

          <div className={styles.companies}>
            <div className={styles.vnukovo}>
              <img src={vnukovo} alt="" />
              <h1>Аэропорт Внуково</h1>
            </div>
            <div className={styles.zarubezhneft}>
              <img src={zarubezneft} alt="" />
              <h1>Зарубежнефть</h1>
            </div>
          </div>
        </div>

        <div className={styles.border_bottom}></div>
      </div>
    </div>
  );
};

export default ActualProject;
