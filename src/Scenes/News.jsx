const News = () => {
  const styles = {
    background: "p-24 bg-white",
    title: "text-center text-[#121b2c] text-7xl pb-12",
    subtitle: "text-center",
  };

  return (
    <>
      <div id="news" className={styles.background}>
        <h1 className={styles.title}>News</h1>
        <p className={styles.subtitle}>Coming Soon!</p>
      </div>
    </>
  );
};

export default News;
