import styles from "./Industry.module.scss";
import mozg from "../../../../icons/Directions/mozg.svg";

const Industry = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.right_block}>
          <div className={styles.left_box}>
            <p>Финансы и банковское дело</p>
            <p>Ритейл</p>
            <p>Здравоохранение</p>
            <p>Электронная коммерция</p>
            <p>Автомобильная промышленность</p>
            <p>Энергетика и природные ресурсы</p>
            <p>Недвижимость и строительство</p>
            <p>Телекоммуникации</p>
            <p>СМИ и развлечения</p>
            <p>Производство</p>
            <p>Транспорт и логистика</p>
            <p>Туризм</p>
            <p>Образование</p>
            <p>Сельское хозяйство и агробизнес</p>
          </div>
          <div className={styles.right_box}>
            <p>Авиация</p>
            <p>Фармацевтика</p>
            <p>Искусство и культура</p>
            <p>Государственный сектор</p>
            <p>IT и технологии</p>
            <p>Спорт и фитнес</p>
            <p>Страхование</p>
            <p>Продукты питания и напитки</p>
            <p>Текстиль и одежда</p>
            <p>Оптовая торговля</p>
            <p>Услуги для потребителей</p>
            <p>Химическая промышленность</p>
            <p>Безопасность и защита</p>
            <p>Исследования и разработки</p>
          </div>
        </div>
      </div>

      <div className={styles.content_mobile}>
        <div className={styles.left_block}>
          <div className={styles.titles}>
            <h1 className={styles.title_1}>направления</h1>
            <h1 className={styles.title_2}>индустрии</h1>
          </div>
          <div className={styles.mozg_position}>
            <img src={mozg} alt="" />
          </div>
        </div>
        <div className={styles.right_block}>
          <div className={styles.left_box}>
            <p>Финансы и банковское дело</p>
            <p>Ритейл</p>
            <p>Здравоохранение</p>
            <p>Электронная коммерция</p>
            <p>Автомобильная промышленность</p>
            <p>Энергетика и природные ресурсы</p>
            <p>Недвижимость и строительство</p>
            <p>Телекоммуникации</p>
            <p>СМИ и развлечения</p>
            <p>Производство</p>
            <p>Транспорт и логистика</p>
            <p>Туризм</p>
            <p>Образование</p>
            <p>Сельское хозяйство и агробизнес</p>
          </div>
          <div className={styles.right_box}>
            <p>Авиация</p>
            <p>Фармацевтика</p>
            <p>Искусство и культура</p>
            <p>Государственный сектор</p>
            <p>IT и технологии</p>
            <p>Спорт и фитнес</p>
            <p>Страхование</p>
            <p>Продукты питания и напитки</p>
            <p>Текстиль и одежда</p>
            <p>Оптовая торговля</p>
            <p>Услуги для потребителей</p>
            <p>Химическая промышленность</p>
            <p>Безопасность и защита</p>
            <p>Исследования и разработки</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
