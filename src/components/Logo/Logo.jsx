import LogoCSS from "./Logo.module.css";

export const Logo = ({ text, navBarLogo, footerLogo }) => {
  return (
    <div
      className={navBarLogo ? `${LogoCSS.navBarLogo}` : `${LogoCSS.footerLogo}`}
    >
      {text}
    </div>
  );
};
