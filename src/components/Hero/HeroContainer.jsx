import HeroCSS from "./Hero.module.css";
import {
  EmojioneWavingHand,
  TwemojiManTechnologistLightSkinTone,
} from "../Emoji/Emoji";

export const HeroContainer = () => {
  return (
    <div className={`${HeroCSS.heroContainer}`}>
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
        </div>
        <div className={`${HeroCSS.imgWrapper}`}>
          <img
            src="https://i.postimg.cc/FskXBfTp/heroimg.png"
            alt="Hero_Sphere"
          />
        </div>
      </div>
    </div>
  );
};
