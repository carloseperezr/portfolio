import ButtonCSS from "./Button.module.css";

export const LinkButton = ({ title, style, logoLive, LogoGit, navlink }) => {
  return (
    <a
      className={style ? `${ButtonCSS.liveBtn}` : `${ButtonCSS.gitHubBtn}`}
      href={navlink}
      target="_blank"
    >
      <p className={`${ButtonCSS.btnTitle}`}>{title}</p>
      <p className={`${ButtonCSS.btnLogo}`}>{logoLive}</p>
    </a>
  );
};
