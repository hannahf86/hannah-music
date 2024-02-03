// COMPONENTS
import Nav from "./Components/Nav";

// SCENES
import Landing from "./Scenes/Landing";
import About from "./Scenes/About";
import News from "./Scenes/News";
import Teaching from "./Scenes/Teaching";
import Contact from "./Scenes/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Landing />
      <News />
      <About />
      <Teaching />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
