import styles from "./Slider_mobile.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    id: "1",
    text: "“Путин призвал обеспечить массовое внедрение искусственного интеллекта на предстоящие десять лет.” ",
    anotherText: "24 ноя — РИА Новости",
  },

  {
    id: "2",
    text: "“Власти обяжут бизнес внедрять искусственный интеллект при получении 13 субсидий.” ",
    anotherText: "09 окт — Forbes",
  },

  {
    id: "3",
    text: "«Повсеместное внедрение ИИ повысит уровень благосостояния граждан — Путин.» ",
    anotherText: "24 ноя — РАПСИ",
  },

  {
    id: "4",
    text: "«Путин: с внедрением ИИ человечество начинает новую главу существования.»  ",
    anotherText: "24 ноя – РБК.",
  },

  {
    id: "5",
    text: "“Чернышенко оценил эффект от внедрения искусственного интеллекта в России за 2023 год в 400 млрд рублей.”",
    anotherText: "18 авг — ПРАЙМ.",
  },

  {
    id: "6",
    text: "«Треть российских компаний готовы внедрять ИИ в ближайшее время.»  ",
    anotherText: " 06 июн – COMNEWS.",
  },

  {
    id: "7",
    text: "«Эксперты: В 2025 году ИИ позволит сэкономить около 1 трлн. рублей.»  ",
    anotherText: "19 окт – Российская газета.",
  },

  {
    id: "8",
    text: "Россию ждет драматический рост влияния, которое искусственный интеллект (ИИ) будет оказывать на современную жизнь.»   ",
    anotherText: "24 ноя – Лента.",
  },

  {
    id: "9",
    text: "«Массовое внедрение ИИ увеличит ВВП России к 2030 году, заявил Чернышенко.»   ",
    anotherText: "26 сен – Прайм.",
  },
  {
    id: "10",
    text: " «Мишустин: к 2024 году планируется довести внедрение ИИ в российской экономике до 50%»  ",
    anotherText: "07 апр – РИА Новости.",
  },

  {
    id: "11",
    text: " «Российская экономика за счет внедрения ИИ получила в 2021 году дополнительные 300 млрд руб. »  ",
    anotherText: "21 ноя – РБК.",
  },
];

const SliderMobile = () => {
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
        <div className={styles.slider_mobile}>
          <Slider
            style={{
              height: "200px",
              width: "97vw",
              padding: "10px",
            }}
            {...settings}
          >
            {data.map((d) => (
              <div className={styles.text}>
                <p>{d.text}</p>
                <p className={styles.anotherText}>
                  <b>{d.anotherText}</b>
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderMobile;
