// RRD
import { NavLink, Outlet } from "react-router-dom";

// IMAGES
// import logo from "../Assets/logo-icon.png";

const Layout = () => {
  return (
    <>
      <header id="header">
        {/* <img src={logo} width={50} /> */}
        <h1>Hannah Feehan | Music Teacher</h1>
        <nav id="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="news">News</NavLink>
          <NavLink to="teaching">Teaching</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
