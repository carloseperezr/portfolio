import LogoCSS from "./Logo.module.css";

export const Logo = ({ text, navBarLogo }) => {
  return (
    <div className={navBarLogo ? `${LogoCSS.navBarLogo}` : ""}>{text}</div>
  );
};
