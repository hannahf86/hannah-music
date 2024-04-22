// images
import guitar from "../Assets/Graphics/guitars.png";
import piano from "../Assets/Graphics/Piano.png";
import theory from "../Assets/Graphics/MusicTheory.png";

const Teaching = () => {
  const styles = {
    background: "px-24 md:px-12 pt-24 md:pt-12 sm:pt-12 bg-neutral-100",
    title:
      "text-center text-[#121b2c] md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl xl:pt-20 lg:pt-16 xl:pb-16 lg:pb-12  sm:pb-6",
    description:
      "text-center text-[#121b2c] xl:text-xl lg:text-lg sm:text-sm leading-8 pb-8 xl:pb-20 lg:pb-12 md:pb-8 sm:pb-8 sm:px-20",
    serviceContainer:
      "grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xl:gap-20 lg:gap-8 md:gap-8 sm:mx-20",
    image: "w-4/5 flex m-auto pt-12 pb-4",
    darkContainer: "bg-[#132A34] text-white px-4 lg:px-4 md:px-6",
    lightContainer: "text-[#121b2c] ",
    serviceTitle: "xl:pt-8 lg:pt-8 md:pt-12 pb-4 font-bold text-center ",
    listItems: "list-none text-center",
  };

  return (
    <>
      <div id="teaching" className={styles.background}>
        <h1 className={styles.title}>Teaching</h1>

        <div>
          <p className={styles.description}>
            Below are the main instruments and areas of study I work in. If your
            option is not here, do not fear! <br />
            <br />
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
                <li className="pb-2">Classical Guitar</li>
                <li className="pb-2">Electric Guitar</li>
                <li className="pb-2">Acoustic Guitar</li>
                <li className="pb-2">Blues Guitar</li>
                <li className="pb-2">Ukulele</li>
              </div>
              <div className="sm:pb-8"></div>
            </div>

            <div>
              <h3 className={styles.serviceTitle}>Services</h3>
              <div className={styles.listItems}>
                <li className="pb-2">Playing for fun!</li>
                <li className="pb-2">Graded Exams</li>
                <li className="pb-2">GCSE Performance Preparation</li>
                <li className="pb-2">A level Performance Preparation</li>
                <li className="pb-2">Undergraduate Performance Preparation</li>
              </div>
              <div className="sm:pb-8"></div>
            </div>

            <div>
              <h3 className={styles.serviceTitle}>Exam Boards</h3>
              <div className={styles.listItems}>
                <li className="pb-2">Music Teachers Board (MTB)</li>
                <li className="pb-2">ABRSM</li>
                <li className="pb-2">Trinity College London</li>
                <li className="pb-2">London College of Music / LCM</li>
                <li className="pb-2">Rockschool</li>
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
                <li className="pb-2">Playing for fun!</li>
                <li className="pb-2">Graded Exams</li>
                <li className="pb-2">GCSE Performance Preparation</li>
                <li className="pb-2">A level Performance Preparation</li>
              </div>
              <div className="sm:pb-8"></div>
            </div>

            <div>
              <h3 className={styles.serviceTitle}>Exam Boards</h3>
              <div className={styles.listItems}>
                <li className="pb-2">Music Teachers Board (MTB)</li>
                <li className="pb-2">ABRSM</li>
                <li className="pb-2">Trinity College London</li>
                <li className="pb-2">London College of Music / LCM</li>
                <li className="pb-2">Rockschool</li>
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
                <li className="pb-2">Music Theory Exams</li>
                <li className="pb-2">Music Teachers Board Theory Exams</li>
                <li className="pb-2">GCSE Music Revision, all exam boards</li>
                <li className="pb-2">
                  A Level Music Revision, all exam boards
                </li>
                <li className="pb-2">Harmony and Analysis</li>
                <li className="pb-2">Music History</li>
              </div>
              <div className="sm:pb-8"></div>
            </div>

            <div>
              <h3 className={styles.serviceTitle}>Exam Boards</h3>
              <div className={styles.listItems}>
                <li className="pb-2">Music Teachers Board (MTB)</li>
                <li className="pb-2">ABRSM</li>
                <li className="pb-2">Trinity College London</li>
                <li className="pb-2">London College of Music / LCM</li>
                <li className="pb-2">Rockschool</li>
                <li className="pb-2">AQA</li>
                <li className="pb-2">Eduqas</li>
                <li className="pb-2">Pearson</li>
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
