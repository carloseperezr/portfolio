import React from "react";
import NavBarCSS from "./NavBar.module.css";
import { Button } from "../Buttons/Button";

export const NavBarLinks = ({
  scrollToSection,
  heroRef,
  projectsRef,
  aboutRef,
  stackRef,
}) => {
  return (
    <>
      <div className={`${NavBarCSS.navBarLinks}`}>
        <button
          onClick={() => scrollToSection(heroRef)}
          className={`${NavBarCSS.navLink}`}
        >
          Inicio
        </button>
        <button
          onClick={() => scrollToSection(projectsRef)}
          className={`${NavBarCSS.navLink}`}
        >
          Proyectos
        </button>
        <button
          onClick={() => scrollToSection(aboutRef)}
          className={`${NavBarCSS.navLink}`}
        >
          Sobre Mi
        </button>
        <button
          onClick={() => scrollToSection(stackRef)}
          className={`${NavBarCSS.navLink}`}
        >
          Stack
        </button>
        <a target="_blank" href="https://www.linkedin.com/in/carloseperezr/">
          <Button style="heroBtn" text="Trabajemos" />
        </a>
      </div>
    </>
  );
};
