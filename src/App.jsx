// COMPONENTS
import Nav from "./Components/Nav";

// SCENES
import Landing from "./Scenes/Landing";
import About from "./Scenes/About";
import News from "./Scenes/News";
import Teaching from "./Scenes/Teaching";
import Contact from "./Scenes/Contact";

function App() {
  return (
    <>
      <Nav />
      <Landing />
      <About />
      <News />
      <Teaching />
      <Contact />
    </>
  );
}

export default App;
