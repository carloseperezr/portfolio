import React, { useRef } from "react";
import AboutCSS from "./About.module.css";
import { useTranslation } from "react-i18next";

const AboutContainer = React.forwardRef((props, ref) => {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "en", name: "En" },
    { code: "es", name: "Es" },
  ];

  return (
    <div ref={ref} className={`${AboutCSS.aboutContainer}`}>
      <div className={`${AboutCSS.infoContainer}`}>
        <h1>{t("aboutTitle")}</h1>
        <p>{t("aboutInfo")}</p>
      </div>
    </div>
  );
});

export default AboutContainer;
