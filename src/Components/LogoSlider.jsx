import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import amazon from "../assets/amazon.png";
import ada from "../assets/ADA.png";
import audio from "../assets/Audio.png";

const LogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 100,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dost: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative overflow-hidden bg-custom-gradient-hero p-10 justify-center items-center self-center">
      <Slider {...settings}>
        <div className="flex">
          <img
            src={ada}
            alt="ADA"
            className="items-center content-center justify-between"
          />
        </div>

        <div className="flex">
          <img
            src={amazon}
            alt="Amazon"
            className="items-center content-center justify-between"
          />
        </div>

        <div className="flex">
          <img
            src={audio}
            alt="Audio"
            className="items-center content-center justify-between"
          />
        </div>
      </Slider>
    </div>
  );
};

export default LogoSlider;
