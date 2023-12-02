import styles from "./ActualProject.module.scss";
import gazprom from "../../../icons/ActualProjects/gazprom neft.svg";
import vnukovo from "../../../icons/ActualProjects/vnykovo.svg";
import zarubezneft from "../../../icons/ActualProjects/zarubezneft.svg";

const ActualProject = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.main_content}>
          <div className={styles.title}>
            <h1>актуальные проекты</h1>
          </div>
          <div className={styles.companies}>
            <img src={gazprom} alt="газпром" />
            <img src={vnukovo} alt="" />
            <img src={zarubezneft} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActualProject;
