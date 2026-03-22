import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Page() {
  return (
    <>
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
       </>
  );
}
