import "./App.css";

import { Header } from "./components/Header";
import { Marquee } from "./components/Marquee";
import { About } from "./components/About";
import { Project1 } from "./components/Projects/Project 1";
import { Project2 } from "./components/Projects/Project 2";
import { Services } from "./components/Services";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Marquee />

      <About />

      <Project1 />

      <Project2 />

      <Services />

      <CTA />

      <Footer />
    </>
  );
}

export default App;