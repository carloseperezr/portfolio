import "./App.css";
import { NavBarContainer } from "./components/NavBar/NavBarContainer";
import { FooterContainer } from "./components/Footer/FooterContainer";
import { HeroContainer } from "./components/Hero/HeroContainer";

function App() {
  return (
    <>
      <NavBarContainer />
      <HeroContainer />
      <FooterContainer />
    </>
  );
}

export default App;
