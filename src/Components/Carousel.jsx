// SLICK
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMAGES
import dates from "../Assets/NewsItems/dates.png";
import isaac from "../Assets/NewsItems/isaac.png";
import newyear from "../Assets/NewsItems/newYear.png";

function Carousel() {
  const styles = {
    image: "flex m-auto xl:pt-12 xl:px-12 lg:pt-4 lg:px-4",
    title: "text-center font-bold py-4 xl:text-2xl lg:text-lg",
    description: "px-4 pt-2 text-center",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <a href="#">
            <img src={newyear} className={styles.image} />
          </a>
          <a href="#">
            <h3 className={styles.title}>Bring on 2024!</h3>
          </a>
        </div>

        <div>
          <a href="#">
            <img src={isaac} className={styles.image} />
          </a>
          <a href="#">
            <h3 className={styles.title}>Conservatoire success for Isaac!</h3>
          </a>
        </div>

        <div>
          <a href="#">
            <img src={dates} className={styles.image} />
          </a>
          <a href="#">
            <h3 className={styles.title}>
              Important dates for your musical diaries
            </h3>
          </a>
        </div>
      </Slider>
    </>
  );
}

export default Carousel;
