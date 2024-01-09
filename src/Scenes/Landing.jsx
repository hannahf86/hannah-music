// IMAGES
import background from "../Assets/music-bg.png";

// COMPONENTS
import Carousel from "../Components/Carousel";

const styles = {
  background: " relative w-full h-screen flex justify-end",
  carousel: "absolute w-4/12 my-16 ml-32 top-80 bg-white pb-12 rounded-lg",
};

const Landing = () => {
  return (
    <div id="/">
      <div className={styles.background}>
        <img src={background} />
      </div>

      <div id="carousel" className={styles.carousel}>
        <Carousel />
      </div>
    </div>
  );
};

export default Landing;
