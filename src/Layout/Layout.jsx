// RRD
import { Outlet } from "react-router-dom";

// COMPONENTS
import Nav from "../Components/Nav";

const Layout = () => {
  const styles = {
    background: "bg-[#0c3649] text-white ",
    title: "pt-16 pb-6 text-center ",
  };

  return (
    <>
      <header className={styles.background}>
        <h1 className={styles.title}>Hannah Feehan | Music Teacher</h1>
        <Nav />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
