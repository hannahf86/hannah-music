import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header id="header">
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
