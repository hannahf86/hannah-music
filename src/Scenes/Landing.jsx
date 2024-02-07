// IMAGES
import large from "../Assets/Backgrounds/large-bg.png";
import tabletBG from "../Assets/Backgrounds/medium-bg.png";
import smallBG from "../Assets/Backgrounds/small-bg.png";
import mobileBG from "../Assets/Backgrounds/mobile-bg.png";

// COMPONENTS
import Carousel from "../Components/Carousel";

const backgroundStyles = {
  large:
    "relative object-cover xl:pt-32 lg:pt-20 flex justify-end opacity-60 hidden md:hidden sm:hidden lg:block",
  medium:
    "relative object-cover flex justify-end opacity-60 hidden md:block sm:hidden lg:hidden",
  small:
    "relative object-cover flex justify-end opacity-60 hidden md:hidden sm:block lg:hidden",
  mobile:
    "relative object-cover opacity-60 block md:hidden sm:hidden lg:hidden",
};

const styles = {
  carousel:
    " hidden sm:hidden md:hidden lg:block absolute xl:w-2/6 lg:w-1/4 my-16 ml-32 xl:top-36 lg:top-24 bg-white pb-12 rounded-lg z-10",
  titleContainer:
    "absolute top-80 top-40 xl:top-80 lg:top-60 md:top-60 sm:top-60 pt-32 xl:pt-56 lg:pt-24 w-full ",
  title:
    " text-left lg:text-right md:text-left text-[#132A34] sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl px-12 md:px-28",
  subtitle:
    "lg:text-right md:text-left text-[#132A34] text-4xl sm:text-3xl px-12 md:px-28",
};

const Landing = () => {
  return (
    <div id="/">
      <div id="background-image">
        <img src={large} className={backgroundStyles.large} />
        <img src={tabletBG} className={backgroundStyles.medium} />
        <img src={smallBG} className={backgroundStyles.small} />
        <img src={mobileBG} className={backgroundStyles.mobile} />
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
