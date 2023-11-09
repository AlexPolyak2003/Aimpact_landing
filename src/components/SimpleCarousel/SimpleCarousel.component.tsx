import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <h1>text</h1>
      </div>
      <div>
        <h1>text</h1>
      </div>
      <div>
        <h1>text</h1>
      </div>
    </Slider>
  );
};

export default SimpleCarousel;
