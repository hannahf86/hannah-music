// images
import isaac from "../Assets/NewsItems/isaac.png";
import newYear from "../Assets/NewsItems/newYear.png";
import guitarGroup from "../Assets/NewsItems/guitarGroup.png";

const News = () => {
  const styles = {
    background: "xl:px-24 lg:px-16 md:px-16 xl:pt-24 lg:pt-12 bg-neutral-100",
    title:
      "text-center text-[#121b2c] md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl py-8 xl:pt-20 lg:pt-20 md:pt-16 sm:py-8 xl:pb-16 lg:pb-12 md:pb-16",
    subtitle: "text-center",
  };

  const newsStyles = {
    gridContainer:
      "grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 xl:gap-12 lg:gap-12 md:gap-12 sm:grid-cols-1",
    newsItemContainer:
      "shadow-lg shadow-slate-300 bg-white rounded-lg mx-12 mb-12 sm:mx-12 md:mx-0 lg:mx-0 xl:mx-0 sm:mb-12 md:mb-0 lg:mb-0 xl:mb-0",
    title:
      "text-center text-2xl xl:text-4xl lg:text-xl md:text-xl font-bold pt-8 xl:pt-12 lg:pt-8 md:pt-8 sm:pt-8 pb-6 px-12 text-[#121b2c]",
    description:
      " px-12 xl:px-8 lg:px-12 md:px-12 sm:px-16 leading-8 text-justify",
    image: "flex m-auto w-8/12 xl:w-6/12 lg:w-9/12 md:w-8/12 sm:w-8/12 pt-12",
    date: "text-sm text-right text-slate-400 pr-20 pt-4 pb-8",
  };

  return (
    <>
      <div id="news" className={styles.background}>
        <h1 className={styles.title}>News</h1>

        {/* NEWS GRID */}
        <div id="content" className={newsStyles.gridContainer}>
          {/* NEWS ITEM 01*/}

          <div id="news-01" className={newsStyles.newsItemContainer}>
            <div className={newsStyles.image}>
              <img src={guitarGroup} />
            </div>
            <h2 className={newsStyles.title}>**New** Group Guitar Lessons</h2>
            <div className={newsStyles.description}>
              <p></p>
            </div>
            <p className={newsStyles.date}>Apr 2024</p>
          </div>

          <div id="news-01" className={newsStyles.newsItemContainer}>
            <div className={newsStyles.image}>
              <img src={isaac} />
            </div>
            <h2 className={newsStyles.title}>
              Conservatoire Success for Isaac!
            </h2>
            <div className={newsStyles.description}>
              <p></p>
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
              <p></p>
            </div>
            <p className={newsStyles.date}>Jan 2024</p>
          </div>

          {/* NEWS ITEM 03*/}

          {/* NEWS ITEM 04*/}
        </div>
      </div>
    </>
  );
};

export default News;
