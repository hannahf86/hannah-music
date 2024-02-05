// images
import isaac from "../Assets/NewsItems/isaac.png";
import newYear from "../Assets/NewsItems/newYear.png";

const News = () => {
  const styles = {
    background: "xl:px-24 lg:px-16 md:px-16 xl:pt-24 lg:pt-12 bg-neutral-100",
    title:
      "text-center text-[#121b2c] md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl xl:pt-20 lg:pt-20 md:pt-16 xl:pb-16 lg:pb-12 md:pb-16",
    subtitle: "text-center",
  };

  const newsStyles = {
    gridContainer: "grid grid-cols-2 gap-20",
    newsItemContainer: "shadow-lg shadow-slate-300 bg-white rounded-lg",
    title:
      "text-center xl:text-4xl lg:text-xl md:text-xl font-bold xl:pt-12 lg:pt-8 md:pt-8 pb-6 px-12 text-[#121b2c]",
    description: "xl:px-20 lg:px-12 md:px-12 leading-8 text-justify",
    image: "flex m-auto xl:w-6/12 lg:w-9/12 md:w-8/12 pt-12",
    date: "text-sm text-right text-slate-400 pr-20 pt-4 pb-8",
  };

  return (
    <>
      <div id="news" className={styles.background}>
        <h1 className={styles.title}>News</h1>

        {/* DESKTOP - NEWS GRID */}
        <div id="content" className={newsStyles.gridContainer}>
          {/* NEWS ITEM 01*/}
          <div id="news-01" className={newsStyles.newsItemContainer}>
            <div className={newsStyles.image}>
              <img src={isaac} />
            </div>
            <h2 className={newsStyles.title}>
              Conservatoire Success for Isaac!
            </h2>
            <div className={newsStyles.description}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <p className={newsStyles.date}>Feb 2024</p>
          </div>

          {/* NEWS ITEM 02*/}
          <div id="news-01" className={newsStyles.newsItemContainer}>
            <div className={newsStyles.image}>
              <img src={newYear} />
            </div>
            <h2 className={newsStyles.title}>
              Congratulations on a successful year!
            </h2>
            <div className={newsStyles.description}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <p className={newsStyles.date}>Jan 2024</p>
          </div>

          {/* NEWS ITEM 03*/}
          <div id="news-01" className={newsStyles.newsItemContainer}>
            <div className={newsStyles.image}>
              <img src={isaac} />
            </div>
            <h2 className={newsStyles.title}>Another place in NYGE</h2>
            <div className={newsStyles.description}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <p className={newsStyles.date}>Oct 2023</p>
          </div>

          {/* NEWS ITEM 04*/}
          <div id="news-01" className={newsStyles.newsItemContainer}>
            <div className={newsStyles.image}>
              <img src={isaac} />
            </div>
            <h2 className={newsStyles.title}>
              Summer Recital Series Continues
            </h2>
            <div className={newsStyles.description}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <p className={newsStyles.date}>Aug 2023</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
