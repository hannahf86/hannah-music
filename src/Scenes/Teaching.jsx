// images
import guitar from "../Assets/guitars.png";
import piano from "../Assets/Piano.png";
import theory from "../Assets/MusicTheory.png";

const Teaching = () => {
  const styles = {
    background: "px-24 pt-24 bg-neutral-100",
    title: "text-center text-[#121b2c] text-7xl pt-20 pb-16",
    description: "text-center text-[#121b2c] text-xl leading-8 pb-20",
    serviceContainer: "grid grid-cols-3 gap-20",
    image: "w-4/5 flex m-auto pt-12 pb-4",
    darkContainer: "bg-[#132A34] text-white",
    lightContainer: "",
    serviceTitle: "pt-8 font-bold text-center ",
    listItems: "list-none leading-10 text-center",
  };

  return (
    <>
      <div id="teaching" className={styles.background}>
        <h1 className={styles.title}>Teaching</h1>

        <div>
          <p className={styles.description}>
            Below are the main instruments and areas of study I work in. If your
            option is not here, do not fear! <br />
            Please get in touch and we can have a chat about it.
          </p>
        </div>

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
              <img src={piano} />
            </div>

            <div>
              <h3 className={styles.serviceTitle}>Services</h3>
              <div className={styles.listItems}>
                <li>Playing for fun!</li>
                <li>Graded Exams</li>
                <li>GCSE Performance Preparation</li>
                <li>A level Performance Preparation</li>
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

          <div id="theory-container" className={styles.darkContainer}>
            <div className={styles.image}>
              <img src={theory} />
            </div>

            <div>
              <h3 className={styles.serviceTitle}>Services</h3>
              <div className={styles.listItems}>
                <li>Music Theory Exams</li>
                <li>Music Teachers Board Theory Exams</li>
                <li>GCSE Music Revision, all exam boards</li>
                <li>A Level Music Revision, all exam boards</li>
                <li>Harmony and Analysis</li>
                <li>Music History</li>
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
                <li>AQA</li>
                <li>Eduqas</li>
                <li>Pearson</li>
              </div>
            </div>
            <div className="pb-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teaching;
