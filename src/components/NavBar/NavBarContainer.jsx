import { Logo } from "../Logo/Logo";
import classes from "./NavBar.module.css";
import { NavBarLinks } from "./NavBarLinks";

export const NavBarContainer = () => {
  return (
    <div className={`${classes.navBarContainer}`}>
      <div className={`${classes.logoWrapper}`}>
        <Logo navBarLogo="navLogo" text="cepro.dev" />
      </div>
      <div>
        <NavBarLinks />
      </div>
    </div>
  );
};
