/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import AboutNew from "./components/AboutNew";
import Skills from "./components/Skills";
import Likes from "./components/Likes";
import Projects from "./components/Projects";
import GitHubSummary from "./components/GithubSummary";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <Header />

      <main>
        {/* About section */}
        <AboutNew />

        {/* Skills section */}
        <Skills />

        {/* Likes section */}
        <Likes />

        {/* Projects section */}
        <Projects />

        {/* GitHub Summary section */}
        <GitHubSummary />

        {/* Education section */}
        <Education />

        {/* Contact section */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
