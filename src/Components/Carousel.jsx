// SLICK
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

// IMAGES
import guitar01 from "../Assets/guitar-01.jpeg";
import isaac from "../Assets/isaac.png";

function Carousel() {
  const styles = {
    image: "justify-center p-4 ",
    description: "px-4 pt-2 text-justify",
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        <div>
          <Link href="#">
            <img src={isaac} className={styles.image} />
          </Link>
          <Link href="#">
            <h3>Congratulations to Isaac!</h3>
          </Link>
          <p className={styles.description}>
            Isaac has been offered at all the conservatoires he applied for,
            finally accepting a place at The Royal Academy of Music with a
            scholarship
          </p>
        </div>

        <div>
          <Link href="#">
            <img src={guitar01} className={styles.image} />
          </Link>
          <Link href="#">
            <h3>Congratulations to Isaac!</h3>
          </Link>
          <p className={styles.description}>
            Isaac has been offered at all the conservatoires he applied for,
            finally accepting a place at The Royal Academy of Music with a
            scholarship
          </p>
        </div>

        <div>
          <Link href="#">
            <img src={isaac} className={styles.image} />
          </Link>
          <Link href="#">
            <h3>Congratulations to Isaac!</h3>
          </Link>
          <p className={styles.description}>
            Isaac has been offered at all the conservatoires he applied for,
            finally accepting a place at The Royal Academy of Music with a
            scholarship
          </p>
        </div>

        <div>
          <Link href="#">
            <img src={isaac} className={styles.image} />
          </Link>
          <Link href="#">
            <h3>Congratulations to Isaac!</h3>
          </Link>
          <p className={styles.description}>
            Isaac has been offered at all the conservatoires he applied for,
            finally accepting a place at The Royal Academy of Music with a
            scholarship
          </p>
        </div>
      </Slider>
    </>
  );
}

export default Carousel;
