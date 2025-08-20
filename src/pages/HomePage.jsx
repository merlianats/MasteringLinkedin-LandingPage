import Hero from "../components/Hero";
import About from "../components/About";
import Benefits from "../components/Benefits";
import Testimoni from "../components/Testimoni";
import Call from "../components/Call";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div
        id="hero"
        className="containerHero bg-[#1C4CAD] pb-10 mx-auto px-8 md:px-4"
      >
        <Hero />
      </div>

      <div id="about" className="containerAbout bg-amber-50 pb-10">
        <About />
      </div>

      <div id="benefits" className="containerBenefits bg-amber-50 pb-10">
        <Benefits />
      </div>

      <div id="testimoni" className="containerTestimoni bg-amber-50 pb-10">
        <Testimoni />
      </div>

      <div
        id="testimoni"
        className="containerCallIt bg-[#1C4CAD] pb-10 md:pb-0"
      >
        <Call />
      </div>
    </>
  );
};

export default HomePage;
