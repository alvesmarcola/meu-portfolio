import "./App.css";

import { Header } from "./components/Header";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Projects } from "./components/Projects/Project 1";

import { Footer } from "./components/Footer";
import { Project2 } from "./components/Projects/Project 2";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <Header />

      <Marquee />

      <About />

      <Projects />
    
      <Project2 />

      <Services />

      <Footer />
    </>
  );
}

export default App;