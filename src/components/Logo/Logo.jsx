import LogoCSS from "./Logo.module.css";

export const Logo = ({ text, navBarLogo, heroRef, scrollToSection }) => {
  const handleClick = () => {
    if (scrollToSection && heroRef.current) {
      scrollToSection(heroRef);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <div
      className={
        navBarLogo === "nav"
          ? `${LogoCSS.navBarLogo}`
          : navBarLogo === "foo"
          ? `${LogoCSS.footerLogo}`
          : ""
      }
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {text}
    </div>
  );
};
