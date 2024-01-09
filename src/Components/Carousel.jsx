// SLICK
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

// IMAGES
import dates from "../Assets/dates.png";
import isaac from "../Assets/isaac.png";
import newyear from "../Assets/newYear.png";

function Carousel() {
  const styles = {
    image: "justify-center p-4 ",
    description: "px-4 pt-2 text-center",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <Link href="#">
            <img src={newyear} className={styles.image} />
          </Link>
          <Link href="#">
            <h3>Bring on 2024!</h3>
          </Link>
          <p className={styles.description}>
            Competition wins, consistently high exam results <br />
            and national ensemble placements... what a year 2023 was! <br />
            Take a look to see what 2024 will have in store!
          </p>
        </div>

        <div>
          <Link href="#">
            <img src={isaac} className={styles.image} />
          </Link>
          <Link href="#">
            <h3>Conservatoire success for Isaac!</h3>
          </Link>
          <p className={styles.description}>
            Isaac has accepted a scholarship offer at The Royal Academy of Music
            to study with Michael Lewin and Stephen Goss.
          </p>
        </div>

        <div>
          <Link href="#">
            <img src={dates} className={styles.image} />
          </Link>
          <Link href="#">
            <h3>Important dates for your musical diaries</h3>
          </Link>
          <p className={styles.description}>
            This will be an ever evolving list so keep an eye on it!
          </p>
        </div>
      </Slider>
    </>
  );
}

export default Carousel;
