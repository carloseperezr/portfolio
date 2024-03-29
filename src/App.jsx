import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import HeroContainer from "./components/Hero/HeroContainer";
import AboutContainer from "./components/About/AboutContainer";
import ContactContainer from "./components/Contact/ContactContainer";
import StackContainer from "./components/Stack/StackContainer";
import { FooterContainer } from "./components/Footer/FooterContainer";

const App = () => {
  const [activeSection, setActiveSection] = useState("");

  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const stackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.scrollY;
      const sections = [
        { ref: heroRef, name: "hero" },
        { ref: projectsRef, name: "projects" },
        { ref: aboutRef, name: "about" },
        { ref: contactRef, name: "contact" },
        { ref: stackRef, name: "stack" },
      ];

      let found = false;

      for (const section of sections) {
        if (
          section.ref &&
          section.ref.current &&
          yOffset >= section.ref.current.offsetTop &&
          yOffset <
            section.ref.current.offsetTop + section.ref.current.clientHeight
        ) {
          setActiveSection(section.name);
          found = true;
          break;
        }
      }

      if (!found) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroRef, projectsRef, aboutRef, contactRef, stackRef]);

  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBarContainer
        scrollToSection={scrollToSection}
        heroRef={heroRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        stackRef={stackRef}
      />
      <HeroContainer ref={heroRef} />
      <ProjectsContainer ref={projectsRef} />
      <AboutContainer ref={aboutRef} />
      <ContactContainer ref={contactRef} />
      <StackContainer ref={stackRef} />
      <FooterContainer />
    </>
  );
};

export default App;
