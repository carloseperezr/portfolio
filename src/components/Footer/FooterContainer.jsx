import { Logo } from "../Logo/Logo";
import classes from "./Footer.module.css";

export const FooterContainer = () => {
  return (
    <div className={`${classes.footerContainer}`}>
      <Logo text="cepro.dev" footerLogo="footLogo" />
    </div>
  );
};
