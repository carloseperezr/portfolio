import "./App.css";
import { NavBarContainer } from "./components/NavBar/NavBarContainer";
import { FooterContainer } from "./components/Footer/FooterContainer";
import { HeroContainer } from "./components/Hero/HeroContainer";
import { ProjectsContainer } from "./components/Projects/ProjectsContainer";
import { AboutContainer } from "./components/About/AboutContainer";
import { ContactContainer } from "./components/Contact/ContactContainer";

function App() {
  return (
    <>
      <NavBarContainer />
      <HeroContainer />
      <ProjectsContainer />
      <AboutContainer />
      <ContactContainer />
    </>
  );
}

export default App;
