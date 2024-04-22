// IMAGES
import full from "../Assets/Backgrounds/bg-full.png";
import md from "../Assets/Backgrounds/bg-lg.png";
import sm from "../Assets/Backgrounds/bg-md.png";
import mobile from "../Assets/Backgrounds/bg-mobile.png";

// COMPONENTS
import Carousel from "../Components/Carousel";

const backgroundStyles = {
  full: "relative object-cover xl:pt-32 lg:pt-20 flex justify-end opacity-60 hidden md:hidden sm:hidden lg:block",
  medium:
    "relative object-cover flex justify-end opacity-60 hidden md:block sm:hidden lg:hidden",
  small:
    "relative object-cover flex justify-end opacity-60 hidden sm:block lg:hidden md:hidden min-[480]:hidden",
  mobile:
    "relative object-cover opacity-60 block sm:hidden lg:hidden md:hidden",
};

const styles = {
  carousel:
    " hidden sm:hidden md:hidden lg:block absolute xl:w-2/6 lg:w-1/4 my-16 ml-32 xl:top-24 lg:top-24 bg-white pb-12 rounded-lg z-10",
  titleContainer:
    "absolute top-20 xl:top-60 lg:top-80 md:top-20 sm:top-8 pt-32 xl:pt-56 lg:pt-24 w-full ",
  title:
    " text-left lg:text-right md:text-left text-[#132A34] text-5xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl px-16",
  subtitle:
    "lg:text-right md:text-left text-[#132A34] text-4xl sm:text-3xl px-16",
};

const Landing = () => {
  return (
    <div id="/">
      <div id="background-image">
        <img src={full} className={backgroundStyles.full} />
        <img src={md} className={backgroundStyles.medium} />
        <img src={sm} className={backgroundStyles.small} />
        <img src={mobile} className={backgroundStyles.mobile} />
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
