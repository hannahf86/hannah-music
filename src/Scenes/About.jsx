// images
import hannah from "../Assets/profile-pic.jpg";

// icons
import { GrInstagram, GrYoutube } from "react-icons/gr";

const About = () => {
  const styles = {
    background: "p-24 bg-neutral-100",
    title:
      "text-left text-[#121b2c] md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl xl:pt-20 lg:pt-12 pl-20 pb-8",
    container: "flex flex-row",
    bio: "leading-8 text-justify pl-20",
    sidebar: "bg-[#132A34] w-1/3 text-white",
    image: "w-2/3 flex m-auto pt-16 pb-4",
    description: "w-2/3 right-0",
    sideTitle: "px-12 pt-8 font-bold",
    sideList: "list-none px-12 xl:leading-10 lg:leading-6",
    socialsContainer: "px-12 flex flex-row",
    socialsIcons: "pr-8 pt-16 hover:text-[#63C0E9] cursor-pointer",
    listItem: "lg:pt-3",
  };

  return (
    <>
      <div id="about" className={styles.background}>
        <div className={styles.container}>
          <div className={styles.sidebar}>
            <div className={styles.image}>
              <img src={hannah} />
            </div>

            <div>
              <h3 className={styles.sideTitle}>Qualifications</h3>
              <div className={styles.sideList}>
                <li className={styles.listItem}>
                  MA Music Education: Instrumental and Vocal Tuition
                </li>
                <li className={styles.listItem}>BA Music Technology</li>
                <li className={styles.listItem}>ATCL Guitar</li>
              </div>

              <h3 className={styles.sideTitle}>Memberships & Other Info</h3>
              <div className={styles.sideList}>
                <li className={styles.listItem}>Musicians Union Member</li>
                <li className={styles.listItem}>Full DBS</li>
                <li className={styles.listItem}>First Aid Training</li>
                <li className={styles.listItem}>
                  NSPCC Safeguarding and Child Protection
                </li>
              </div>
            </div>

            <div id="socials" className={styles.socialsContainer}>
              <div className={styles.socialsIcons}>
                <a
                  href="https://www.instagram.com/hannahfeehanmusic/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrInstagram size={28} />
                </a>
              </div>
              <div className={styles.socialsIcons}>
                <a
                  href="https://www.youtube.com/@hannah-musicteacher"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrYoutube size={28} />
                </a>
              </div>
              {/* <div className={styles.socialsIcons}>
                <a href="/" target="_blank" rel="noreferrer">
                  <GrFacebookOption size={28} />
                </a>
              </div> */}
            </div>
            <div className="xl:pb-12 lg:pb-8"></div>
          </div>

          <div id="description" className={styles.description}>
            <h1 className={styles.title}>About Hannah</h1>
            <div className={styles.bio}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
