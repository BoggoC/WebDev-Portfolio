import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import BackToTopBtn from "./components/BackToTopBtn";
import { useFetchData } from "./components/fetchData";

const App = () => {
  const { loading } = useFetchData();
  if (loading) {
    return <section className="loading"></section>;
  }
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <BackToTopBtn />
    </>
  );
};

export default App;
