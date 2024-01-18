import { BurguerIcon } from "../Buttons/BurguerIcon";
import BurgerCSS from "../Buttons/Button.module.css";
import { useState, useEffect } from "react";
import { Button } from "../Buttons/Button";

export const NavBarLinks = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const body = document.body;

    if (clicked) {
      // Agregar una clase al cuerpo para deshabilitar el scroll
      body.classList.add(BurgerCSS.bodyNoScroll);
    } else {
      // Eliminar la clase para habilitar el scroll nuevamente
      body.classList.remove(BurgerCSS.bodyNoScroll);
    }

    return () => {
      // Asegurarse de eliminar la clase al desmontar el componente
      body.classList.remove(BurgerCSS.bodyNoScroll);
    };
  }, [clicked]);

  return (
    <>
      <div
        className={`${BurgerCSS.navBarLinks} ${
          clicked ? BurgerCSS.active : ""
        }`}
      >
        <a onClick={handleClick} className={`${BurgerCSS.navLinks}`} href="">
          Inicio
        </a>
        <a onClick={handleClick} className={`${BurgerCSS.navLinks}`} href="">
          Proyectos
        </a>
        <a onClick={handleClick} className={`${BurgerCSS.navLinks}`} href="">
          Sobre Mi
        </a>
        <a href="https://www.linkedin.com/in/carloseperezr/">
          <Button style="heroBtn" text="Trabajemos" />
        </a>
      </div>
      <div className={`${BurgerCSS.burguer}`}>
        <BurguerIcon clicked={clicked} handleClick={handleClick} />
      </div>
      <div
        className={`${BurgerCSS.bgInitial} ${clicked ? BurgerCSS.active : ""}`}
      ></div>
    </>
  );
};
