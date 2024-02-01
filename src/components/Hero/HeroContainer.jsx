import React from "react";
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
  return (
    <div ref={ref} className={`${HeroCSS.heroContainer}`}>
      <div className={`${HeroCSS.heroWrapper}`}>
        <div className={`${HeroCSS.heroText}`}>
          <p className={`${HeroCSS.helloText}`}>
            ¡Hola! <EmojioneWavingHand />, soy
          </p>
          <h1>carlos.</h1>
          <p className={`${HeroCSS.infoText}`}>
            Web + Mobile Developer <TwemojiManTechnologistLightSkinTone />
          </p>
          <p className={`${HeroCSS.detailsText}`}>
            Desarrollador apasionado, transformando ideas en experiencias
            digitales notables.
          </p>
          <p className={`${HeroCSS.locationText}`}>Bogotá, Col.</p>
          <div className={`${HeroCSS.callToAction}`}>
            <a
              href="mailto:perezcarlos1580@gmail.com?subject=Trabajemos"
              target="_blank"
            >
              <Button style={"herobtn"} text={"Trabajemos"}>
                Trabajemos
              </Button>
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
