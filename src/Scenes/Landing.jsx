// IMAGES
import background from "../Assets/music-bg.png";

// COMPONENTS
import Carousel from "../Components/Carousel";

const styles = {
  background: " relative w-full h-screen flex justify-end",
  carousel: "absolute w-4/12 my-16 ml-32 top-36 bg-white pb-12 rounded-lg z-10",
  titleContainer: "absolute bottom-28 bg-[#121b2c] w-full py-8",
  title: "text-right text-white text-7xl px-28",
  subtitle: "text-right text-white text-4xl px-28",
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

      <div className={styles.titleContainer}>
        <h1 className={styles.title}>HANNAH FEEHAN</h1>
        <h2 className={styles.subtitle}>Music Teacher</h2>
      </div>
    </div>
  );
};

export default Landing;
