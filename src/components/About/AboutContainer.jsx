import React, { useRef } from "react";
import AboutCSS from "./About.module.css";

const AboutContainer = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className={`${AboutCSS.aboutContainer}`}>
      <div className={`${AboutCSS.infoContainer}`}>
        <h1>Sobre Mi</h1>
        <p>
          ¡Hola nuevamente! quiero contarte un poco más de mi, soy un
          programador especializado en JavaScript, ReactJS y React Native. Mi
          enfoque colaborativo y habilidades de comunicación me permiten
          integrarme fácilmente en equipos de desarrollo, mientras que mi
          dedicación a los detalles impulsa la excelencia en cada proyecto.
          Apasionado por resolver problemas, disfruto enfrentar nuevos desafíos
          en el mundo del desarrollo de software.
        </p>
      </div>
    </div>
  );
});

export default AboutContainer;
