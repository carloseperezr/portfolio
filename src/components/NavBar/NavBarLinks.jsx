import React, { useState, useEffect, useRef } from "react";
import NavBarCSS from "./NavBar.module.css";
import { Button } from "../Buttons/Button";
import LanguageSelector from "../Languages/LanguageSelector";
import { useTranslation } from "react-i18next";
import { TfiWorld } from "react-icons/tfi";

export const NavBarLinks = ({
  scrollToSection,
  heroRef,
  projectsRef,
  aboutRef,
  stackRef,
}) => {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "en", name: "En" },
    { code: "es", name: "Es" },
  ];

  const [openLang, setOpenLang] = useState(false);
  const containerRef = useRef(null);

  const handleOpen = () => {
    setOpenLang(!openLang);
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setOpenLang(false);
    }
  };

  useEffect(() => {
    if (openLang) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openLang]);

  return (
    <>
      <div className={`${NavBarCSS.navBarLinks}`}>
        <button
          onClick={() => scrollToSection(heroRef)}
          className={`${NavBarCSS.navLink}`}
        >
          {t("home")}
        </button>
        <button
          onClick={() => scrollToSection(projectsRef)}
          className={`${NavBarCSS.navLink}`}
        >
          {t("projects")}
        </button>
        <button
          onClick={() => scrollToSection(aboutRef)}
          className={`${NavBarCSS.navLink}`}
        >
          {t("about")}
        </button>
        <button
          onClick={() => scrollToSection(stackRef)}
          className={`${NavBarCSS.navLink}`}
        >
          {t("stack")}
        </button>
        <a target="_blank" href="https://www.linkedin.com/in/carloseperezr/">
          <Button style="heroBtn" text={t("hireMeBtn")} />
        </a>
        <div className={`${NavBarCSS.languages}`} ref={containerRef}>
          <TfiWorld size={"18px"} onClick={handleOpen} />
          {openLang && (
            <div className={NavBarCSS.container}>
              <LanguageSelector />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
