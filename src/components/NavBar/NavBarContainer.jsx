import { Logo } from "../Logo/Logo";
import classes from "./NavBar.module.css";
import { NavBarLinks } from "./NavBarLinks";

const NavBarContainer = ({
  scrollToSection,
  heroRef,
  projectsRef,
  aboutRef,
  contactRef,
  stackRef,
}) => {
  return (
    <div className={`${classes.navBarContainer}`}>
      <div className={`${classes.logoWrapper}`}>
        <Logo
          navBarLogo="nav"
          text="cepro.dev"
          scrollToSection={scrollToSection}
          heroRef={heroRef}
        />
      </div>
      <div className={`${classes.linksWrapper}`}>
        <NavBarLinks
          scrollToSection={scrollToSection}
          heroRef={heroRef}
          projectsRef={projectsRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
          stackRef={stackRef}
        />
      </div>
    </div>
  );
};

export default NavBarContainer;
