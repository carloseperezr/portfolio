import ProjectsCSS from "./Projects.module.css";
import {
  EntypoSocialGithub,
  CarbonPlay,
  DeviconReact,
  DeviconCss3,
  SkillIconsJavascript,
} from "../Emoji/Emoji";
import { LinkButton } from "../Buttons/LinkButton";

export const ProjectCard = ({
  title,
  img,
  skeleton,
  description,
  skeletonText,
  live,
  gitHub,
  react,
  js,
  css,
}) => {
  return (
    <div className={`${ProjectsCSS.projectCard}`}>
      {skeleton ? (
        <img src="https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png" />
      ) : (
        <img src="https://i.postimg.cc/d1c0vy29/Equilibrium-Banner.png" />
      )}
      <div className={`${ProjectsCSS.stackInfo}`}>
        <div className={`${ProjectsCSS.stackWrapper}`}>
          <div className={`${ProjectsCSS.stackIcon}`}>
            {js ? <SkillIconsJavascript /> : ""}
          </div>
          <div className={`${ProjectsCSS.stackIcon}`}>
            {react ? <DeviconReact /> : ""}
          </div>
          <div className={`${ProjectsCSS.stackIcon}`}>
            {css ? <DeviconCss3 /> : ""}
          </div>
        </div>
      </div>
      <div className={`${ProjectsCSS.cardDetail}`}>
        <div className={`${ProjectsCSS.cardTitle_Btns}`}>
          <h2>{title}</h2>
          <div className={`${ProjectsCSS.btnWrapper}`}>
            <LinkButton
              title="Live"
              style="demo"
              navlink={live}
              logoLive={<CarbonPlay />}
            />
            <LinkButton
              title="GitHub"
              navlink={gitHub}
              logoLive={<EntypoSocialGithub />}
            />
          </div>
        </div>
        <p>{skeletonText ? skeletonText : description}</p>
      </div>
    </div>
  );
};
