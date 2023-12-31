import styles from "./Directions.module.scss";
import kruzhok from "../../../../icons/Directions/kryzhok_punkt.svg";

const Direction_page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.right_box}>
          <div className={styles.points}>
            <img src={kruzhok} alt="кружок" />
            <p>AI-консалтинг и разработка AI решений</p>
          </div>
          <div className={styles.points_large}>
            <img src={kruzhok} alt="кружок" />
            <p className={styles.text}>
              Интеграция систем машинного обучения для прогнозной аналитики
              продаж и оценки рисков
            </p>
          </div>
          <div className={styles.points}>
            <img src={kruzhok} alt="кружок" />
            <p>Техническая оптимизация бизнес-процессов компаний</p>
          </div>
          <div className={styles.points_large}>
            <img src={kruzhok} alt="кружок" />
            <p className={styles.text}>
              Реализация системы хранения и аналитической обработки больших
              данных
            </p>
          </div>
          <div className={styles.points_large}>
            <img src={kruzhok} alt="кружок" />
            <p>Разработка мобильных приложений, сайтов и BI- визуализации</p>
          </div>
          <div className={styles.points}>
            <img src={kruzhok} alt="кружок" />
            <p>Разработка языковых моделей и генеративного ИИ</p>
          </div>
        </div>
      </div>

      {/* мобильная версия */}

      <div className={styles.content_mobile}>
        <div className={styles.right_box}>
          <div className={styles.points}>
            <img src={kruzhok} alt="кружок" />
            <p>AI-консалтинг и разработка AI решений</p>
          </div>

          <div className={styles.points_large}>
            <img src={kruzhok} alt="кружок" />

            <p className={styles.text}>
              Интеграция систем машинного обучения для прогнозной аналитики
              продаж и оценки рисков
            </p>
          </div>

          <div className={styles.points}>
            <img src={kruzhok} alt="кружок" />
            <p>Техническая оптимизация бизнес-процессов компаний</p>
          </div>

          <div className={styles.points_large}>
            <img src={kruzhok} alt="кружок" />

            <p className={styles.text}>
              Реализация системы хранения и аналитической обработки больших
              данных
            </p>
          </div>

          <div className={styles.points_large}>
            <img src={kruzhok} alt="кружок" />

            <p>Разработка мобильных приложений, сайтов и BI- визуализации</p>
          </div>

          <div className={styles.points}>
            <img src={kruzhok} alt="кружок" />
            <p>Разработка языковых моделей и генеративного ИИ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Direction_page;
