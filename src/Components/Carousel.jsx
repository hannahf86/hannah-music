// SLICK
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMAGES
import guitar01 from "../Assets/guitar-01.jpeg";

function Carousel() {
  const styles = {
    image: "justify-center p-4 ",
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
          <img src={guitar01} className={styles.image} />
          <h3>NEWS ITEM 1</h3>
        </div>

        <div>
          <img src={guitar01} className={styles.image} />
          <h3>NEWS ITEM 1</h3>
        </div>

        <div>
          <img src={guitar01} className={styles.image} />
          <h3>NEWS ITEM 1</h3>
        </div>

        <div>
          <img src={guitar01} className={styles.image} />
          <h3>NEWS ITEM 1</h3>
        </div>
      </Slider>
    </>
  );
}

export default Carousel;
