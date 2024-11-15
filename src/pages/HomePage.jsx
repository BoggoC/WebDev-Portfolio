import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import BackToTopBtn from "../components/BackToTopBtn";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <BackToTopBtn />
    </main>
  );
};

export default HomePage;
