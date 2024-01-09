import { NavLink } from "react-router-dom";

// ICONS
import { HiHome, HiBeaker, HiDesktopComputer, HiMail } from "react-icons/hi";

const Nav = () => {
  const styles = {
    mobileContainer: "lg:hidden",
    background:
      "flex justify-center justify-evenly items-center fixed bottom-0 left-0 z-50 w-full bg-[#121b2c] z-10",
    icon: "text-neutral-200 active:text-[#F97316] active:scale-110 my-6 mx-6",
  };

  const desktopStyles = {
    desktopContainer: "hidden md:hidden sm:hidden lg:block",
    background: " w-full flex flex-row justify-evenly z-10 bg-[#0c3649]",
    icons: "flex flex-row content-center text-neutral-200 my-12",
    text: "flex items-center text-xl ml-3 tracking-widest hover:text-[#F97316] hover:scale-110 cursor-pointer",
  };

  return (
    <>
      {/* MOBILE & TABLET NAV */}
      <div id="mobile-nav" className={styles.mobileContainer}>
        <div className={styles.background}>
          <NavLink href="/">
            <HiHome size={28} className={styles.icon} />
          </NavLink>

          <NavLink href="/#projects">
            <HiBeaker size={25} className={styles.icon} />
          </NavLink>

          <NavLink href="/#skills">
            <HiDesktopComputer size={28} className={styles.icon} />
          </NavLink>

          <NavLink href="/#contact">
            <HiMail size={28} className={styles.icon} />
          </NavLink>
        </div>
      </div>

      {/* DESKTOP NAV*/}
      <div className={desktopStyles.desktopContainer}>
        <div id="desktop-nav" className={desktopStyles.background}>
          <div className={desktopStyles.icons}>
            <NavLink href="/">
              <h2 className={desktopStyles.text}>
                <div className="mr-3">
                  <HiHome />
                </div>
                HOME
              </h2>
            </NavLink>
          </div>

          <div className={desktopStyles.icons}>
            <NavLink href="/#projects">
              {" "}
              <h2 className={desktopStyles.text}>
                <div className="mr-3">
                  <HiBeaker />
                </div>
                NEWS
              </h2>
            </NavLink>
          </div>

          <div className={desktopStyles.icons}>
            <NavLink href="/#skills">
              <h2 className={desktopStyles.text}>
                <div className="mr-3">
                  <HiDesktopComputer />
                </div>
                ABOUT
              </h2>
            </NavLink>
          </div>

          <div className={desktopStyles.icons}>
            <NavLink href="/#skills">
              <h2 className={desktopStyles.text}>
                <div className="mr-3">
                  <HiDesktopComputer />
                </div>
                TEACHING
              </h2>
            </NavLink>
          </div>

          <div className={desktopStyles.icons}>
            <NavLink href="/#contact">
              {" "}
              <h2 className={desktopStyles.text}>
                <div className="mr-3">
                  <HiMail />
                </div>
                CONTACT
              </h2>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
