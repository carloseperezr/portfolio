import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { TfiWorld } from "react-icons/tfi";
import LangCSS from "./Language.module.css";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setShowMenu(false);
  };

  return (
    <div className={`${LangCSS.container}`}>
      <ul className={`${LangCSS.btnWrapper}`}>
        <li>
          {" "}
          <button onClick={() => changeLanguage("en")}>En</button>
        </li>
        <li>
          <button onClick={() => changeLanguage("es")}>Es</button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
