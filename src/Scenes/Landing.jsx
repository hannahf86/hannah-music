// IMAGES
import background from "../Assets/music-bg.png";

const styles = {
  background: "w-screen flex justify-end",
};

const Landing = () => {
  return (
    <div id="/">
      <div className={styles.background}>
        <img src={background} />
      </div>
    </div>
  );
};

export default Landing;
