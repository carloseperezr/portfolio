import React from "react";
import HeroCSS from "./Hero.module.css";
import {
  EmojioneWavingHand,
  TwemojiManTechnologistLightSkinTone,
} from "../Emoji/Emoji";
import { Button } from "../Buttons/Button";

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
          <a target="_blank" href="https://www.linkedin.com/in/carloseperezr/">
            <Button style="heroBtn" text="Trabajemos" />
          </a>
        </div>
        <div className={`${HeroCSS.imgWrapper}`}>
          <img
            loading="lazy"
            src="https://i.postimg.cc/FskXBfTp/heroimg.png"
            alt="Hero_Sphere"
          />
        </div>
      </div>
    </div>
  );
});

export default HeroContainer;
