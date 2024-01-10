import classes from "./NavBar.module.css";
import { CiMenuFries } from "react-icons/ci";

export const NavBarLinks = () => {
  return (
    <button className={`${classes.navBarMenu}`}>
      <CiMenuFries />
    </button>
  );
};
