// images
import hannah from "../Assets/profile-pic.jpg";

const About = () => {
  const styles = {
    background: "p-24 bg-neutral-100",
    title: "text-left text-[#121b2c] text-6xl pt-20 pl-20 pb-8",
    container: "flex flex-row",
    bio: "leading-8 text-justify pl-20",
    sidebar: "bg-[#132A34] w-1/3 text-white",
    image: "w-2/3 flex m-auto pt-16 pb-4",
    description: "w-2/3 right-0",
    sideTitle: "pl-12 pt-8 font-bold",
    sideList: "list-none pl-12 leading-10",
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
                <li>MA Music Education: Instrumental and Vocal Tuition</li>
                <li>BA Music Technology</li>
                <li>ATCL Guitar</li>
              </div>

              <h3 className={styles.sideTitle}>Memberships & Other Info</h3>
              <div className={styles.sideList}>
                <li>Musicians Union</li>
                <li>Full DBS</li>
                <li>First Aid Training</li>
                <li>NSPCC Safeguarding and Child Protection</li>
              </div>
            </div>
            <div className="pb-12"></div>
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
