// images
import guitar from "../Assets/guitars.png";

const Teaching = () => {
  const styles = {
    background: "px-24 pt-24 bg-neutral-100",
    title: "text-center text-[#121b2c] text-7xl pt-20 pb-16",
    serviceContainer: "grid grid-cols-3 gap-20",
    serviceItem: "",
    image: "w-2/3 flex m-auto pt-12 pb-4",
    darkContainer: "bg-[#132A34] text-white",
    lightContainer: "",
    serviceTitle: "pt-8 font-bold text-center ",
    listItems: "list-none leading-10 text-center",
  };

  return (
    <>
      <div id="teaching" className={styles.background}>
        <h1 className={styles.title}>Teaching</h1>

        <div id="services" className={styles.serviceContainer}>
          <div id="guitar-container" className={styles.darkContainer}>
            <div className={styles.image}>
              <img src={guitar} />
            </div>

            <div>
              <h3 className={styles.serviceTitle}>Instruments</h3>
              <div className={styles.listItems}>
                <li>Classical Guitar</li>
                <li>Electric Guitar</li>
                <li>Acoustic Guitar</li>
                <li>Blues Guitar</li>
                <li>Ukulele</li>
              </div>
            </div>

            <div>
              <h3 className={styles.serviceTitle}>Services</h3>
              <div className={styles.listItems}>
                <li>Playing for fun!</li>
                <li>Graded Exams</li>
                <li>GCSE Performance Preparation</li>
                <li>A level Performance Preparation</li>
                <li>Undergraduate Performance Preparation</li>
              </div>
            </div>

            <div>
              <h3 className={styles.serviceTitle}>Exam Boards</h3>
              <div className={styles.listItems}>
                <li>Music Teachers Board (MTB)</li>
                <li>ABRSM</li>
                <li>Trinity College London</li>
                <li>London College of Music / LCM</li>
                <li>Rockschool</li>
              </div>
            </div>
            <div className="pb-12"></div>
          </div>

          <div id="piano-container" className={styles.lightContainer}>
            <div className={styles.image}>
              <img src={guitar} />
            </div>
          </div>

          <div id="theory-container" className={styles.darkContainer}>
            <div className={styles.image}>
              <img src={guitar} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teaching;
