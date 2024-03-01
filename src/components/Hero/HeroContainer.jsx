import React from "react";
import { useTranslation } from "react-i18next";
import HeroCSS from "./Hero.module.css";
import { Button } from "../Buttons/Button";
import Lottie from "lottie-react";
import animationHero from "../../assets/heroAnimation.json";
import { ImLinkedin } from "react-icons/im";
import {
  EmojioneWavingHand,
  TwemojiManTechnologistLightSkinTone,
} from "../Emoji/Emoji";

const HeroContainer = React.forwardRef((props, ref) => {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: "en", name: "En" },
    { code: "es", name: "Es" },
  ];

  return (
    <div ref={ref} className={`${HeroCSS.heroContainer}`}>
      <div className={`${HeroCSS.heroWrapper}`}>
        <div className={`${HeroCSS.heroText}`}>
          <p className={`${HeroCSS.helloText}`}>
            {t("welcome")} <EmojioneWavingHand />, {t("im")}
          </p>
          <h1>carlos.</h1>
          <p className={`${HeroCSS.infoText}`}>
            {t("role")}
            <TwemojiManTechnologistLightSkinTone />
          </p>
          <p className={`${HeroCSS.detailsText}`}>{t("heroInfo")}</p>
          <p className={`${HeroCSS.locationText}`}>Bogotá, Col.</p>
          <div className={`${HeroCSS.callToAction}`}>
            <a
              href="mailto:perezcarlos1580@gmail.com?subject=Trabajemos"
              target="_blank"
            >
              <Button style={"herobtn"} text={t("hireMeBtn")}></Button>
            </a>
            <a
              href="https://www.linkedin.com/in/carloseperezr/"
              target="_blank"
            >
              <ImLinkedin className={`${HeroCSS.linkedIN}`} size={"52px"} />
            </a>
          </div>
        </div>
        <div className={`${HeroCSS.imgWrapper}`}>
          <Lottie animationData={animationHero}></Lottie>
        </div>
      </div>
    </div>
  );
});

export default HeroContainer;
