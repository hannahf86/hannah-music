// images
import hannah from "../Assets/profile-pic.jpg";

// icons
import { GrInstagram, GrYoutube } from "react-icons/gr";

const About = () => {
  const mobileStyles = {
    background: "bg-neutral-100 md:hidden lg:hidden",
    title:
      "text-center text-[#121b2c] md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl py-8 xl:pt-20 lg:pt-20 md:pt-16 sm:py-8 xl:pb-16 lg:pb-12 md:pb-16",
    bio: "leading-8 text-justify mx-20 pb-12",
    bottomBar: "bg-[#132A34] text-white pb-4 pt-4",
    image: "w-2/3 flex m-auto pb-8",
    bottomTitle: "px-20 sm:px-6 pt-8 pb-2 font-bold sm:text-lg",
    bottomList:
      "list-none lg:list-disc md:list-disc sm:list-none px-20 sm:px-6 md:px-8 xl:leading-10 lg:leading-6 md:leading-6",
    socialsContainer: "px-20 flex flex-row",
    socialsIcons: "pr-12 py-16 hover:text-[#63C0E9]",
    listItem: "sm:text-sm sm:pb-3 leading-8",
  };

  const styles = {
    background: "px-24 bg-neutral-100 hidden md:block sm:hidden lg:block",
    title:
      "text-left text-[#121b2c] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl xl:pt-20 lg:pt-12 md:pt-8 sm:pt-8 pl-20 pb-8",
    container: "flex flex-row",
    bio: "leading-8 text-justify ",
    sidebar: "bg-[#132A34] w-1/3 text-white",
    image: "w-2/3 flex m-auto pt-16 pb-4",
    description: "w-2/3 right-0",
    sideTitle: "px-12 sm:px-6 pt-8 md:pb-2 sm:pb-4 font-bold sm:text-lg",
    sideList:
      "list-none lg:list-disc md:list-disc sm:list-none px-12 sm:px-6 md:px-8 xl:leading-10 lg:leading-6 md:leading-6",
    socialsContainer: "px-12 flex flex-row",
    socialsIcons: "pr-8 pt-16 hover:text-[#63C0E9] cursor-pointer",
    listItem: "lg:pt-3 md:pt-3 sm:text-sm sm:pb-3",
  };

  return (
    <>
      <div id="about">
        {/* MOBILE DESIGN */}
        <div id="mobile-about" className={mobileStyles.background}>
          <h1 className={mobileStyles.title}>About Hannah</h1>
          <div className={mobileStyles.bio}>
            <div className={mobileStyles.image}>
              <img src={hannah} />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className={mobileStyles.bottomBar}>
            <div>
              <h3 className={mobileStyles.bottomTitle}>Qualifications</h3>
              <div className={mobileStyles.bottomList}>
                <li className={mobileStyles.listItem}>
                  MA Music Education: Instrumental and Vocal Tuition
                </li>
                <li className={mobileStyles.listItem}>BA Music Technology</li>
                <li className={mobileStyles.listItem}>ATCL Guitar</li>
              </div>

              <h3 className={mobileStyles.bottomTitle}>
                Memberships & Other Info
              </h3>
              <div className={mobileStyles.bottomList}>
                <li className={mobileStyles.listItem}>
                  Musicians Union Member
                </li>
                <li className={mobileStyles.listItem}>Full DBS</li>
                <li className={mobileStyles.listItem}>First Aid Training</li>
                <li className={mobileStyles.listItem}>
                  NSPCC Safeguarding and Child Protection
                </li>
              </div>
            </div>

            <div id="socials" className={mobileStyles.socialsContainer}>
              <div className={mobileStyles.socialsIcons}>
                <a
                  href="https://www.instagram.com/hannahfeehanmusic/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GrInstagram size={28} />
                </a>
              </div>
              <div className={mobileStyles.socialsIcons}>
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
        </div>

        {/* EVERYTHING ELSE DESIGN */}
        <div id="desktop-about" className={styles.background}>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
