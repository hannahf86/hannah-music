// REACT-ROUTER-DOM
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// LAYOUTS
import Layout from "./Layout/Layout";

// SCENES
import Landing from "./Scenes/Landing";
import About from "./Scenes/About";
import News from "./Scenes/News";
import Teaching from "./Scenes/Teaching";
import Contact from "./Scenes/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* OUTLET */}
      <Route index element={<Landing />} />
      <Route path="about" element={<About />} />
      <Route path="news" element={<News />} />
      <Route path="teaching" element={<Teaching />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
