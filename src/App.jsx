import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import { useFetchData } from "./components/fetchData";

const App = () => {
  const { loading } = useFetchData();
  if (loading) {
    return (
      <section className="hero">
        <h2>Loading...</h2>
      </section>
    );
  }
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
    </>
  );
};

export default App;
