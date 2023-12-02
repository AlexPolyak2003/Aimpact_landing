import styles from "./Slider.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: "1",
    text: "“Путин призвал обеспечить массовое внедрение искусственного интеллекта на предстоящие десять лет.”  24 ноя — РИА Новости",
  },

  {
    id: "2",
    text: "“Власти обяжут бизнес внедрять искусственный интеллект при получении 13 субсидий.”  09 окт — Forbes",
  },

  {
    id: "3",
    text: " “Чернышенко оценил эффект от внедрения искусственного интеллекта в России за 2023 год в 400 млрд рублей.” 18 авг — ПРАЙМ",
  },

  {
    id: "4",
    text: "“Треть российских компаний готовы внедрять ИИ в ближайшее время.”  06 июн – COMNEWS ",
  },

  {
    id: "5",
    text: "“Эксперты: В 2025 году ИИ позволит сэкономить около 1 трлн. рублей.” 19 окт – Российская газета",
  },

  {
    id: "6",
    text: "«Россию ждет драматический рост влияния, которое искусственный интеллект (ИИ) будет оказывать на современную жизнь.»  24 ноя – Лента",
  },

  {
    id: "7",
    text: "«Массовое внедрение ИИ увеличит ВВП России к 2030 году, заявил Чернышенко.» 26 сен – Прайм ",
  },

  {
    id: "8",
    text: "В Мишустин: к 2024 году планируется довести внедрение ИИ в российской экономике до 50% 07 апр – РИА Новости  ",
  },

  {
    id: "9",
    text: "Российская экономика за счет внедрения ИИ получила в 2021 году дополнительные 300 млрд руб. 21 ноя - РБК",
  },
  {
    id: "10",
    text: "«Повсеместное внедрение ИИ повысит уровень благосостояния граждан — Путин.» 24 ноя — РАПСИ."
  }
];

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    vertical: true,
    centerPadding: "5em",
    arrows: false,
    // responsiveMode: true,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.slider}>
          <Slider
            style={{
              height: "200px",
              width: "35vw",
              padding: "10px",
            }}
            {...settings}
          >
            {data.map((d) => (
              <div className={styles.text}>
                <p>{d.text}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
