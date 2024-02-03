// IMAGES
import background from "../Assets/music-bg.png";

// COMPONENTS
import Carousel from "../Components/Carousel";

const styles = {
  background:
    " relative object-cover xl:pt-32 lg:pt-20 flex justify-end opacity-60",
  carousel:
    " hidden md:hidden sm:hidden lg:block absolute xl:w-2/6 lg:w-1/4 my-16 ml-32 xl:top-36 lg:top-24 bg-white pb-12 rounded-lg z-10",
  titleContainer: "absolute xl:bottom-32 lg:bottom-60 w-full py-8",
  title:
    "text-right text-[#132A34] md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl px-28",
  subtitle: "text-right text-[#132A34] text-4xl px-28",
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
