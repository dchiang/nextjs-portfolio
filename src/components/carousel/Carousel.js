import Head from "next/head";
import Arrow from "./Arrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { slickDots } from "./carousel.module.scss";

const Carousel = (props) => {
  const darkTheme = props.darkTheme != undefined ? props.darkTheme : false;
  const settings =
    props.settings != undefined
      ? props.settings
      : {
          dots: true,
          dotsClass: `slick-dots ${slickDots}`,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          cssEase: "linear",
          pauseOnHover: true,
          adaptiveHeight: true,
          arrows: true,
        };
  if (settings.arrows && !settings.nextArrow) {
    settings.nextArrow = <Arrow darkTheme={darkTheme} />;
  }
  if (settings.arrows && !settings.prevArrow) {
    settings.prevArrow = <Arrow darkTheme={darkTheme} />;
  }

  return (
    <div className="pl-4">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
          rel="stylesheet"
        />
      </Head>
      <Slider style={props.style} {...settings}>
        {props.children}
      </Slider>
    </div>
  );
};

export default Carousel;
