import React from "react";
import FooterCSS from "./Footer.module.css";
import FooterIMG from "../../assets/footerIMG.png";
import { ImHeart } from "react-icons/im";
import { Logo } from "../Logo/Logo";

export const FooterContainer = () => {
  return (
    <div className={`${FooterCSS.footerContainer}`}>
      <div className={`${FooterCSS.firstColumn}`}>
        <Logo text={"cepro.dev"} navBarLogo={"foo"} />
        <div className={`${FooterCSS.Footerdetails}`}>
          <small>made with love</small>
          <ImHeart color={"red"} />
        </div>
        <img src={FooterIMG} alt="Footer IMG" />
      </div>
    </div>
  );
};
