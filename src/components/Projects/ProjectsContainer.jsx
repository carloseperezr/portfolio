import React, { useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import ProjectsCSS from "./Projects.module.css";
import { useTranslation } from "react-i18next";

const ProjectsContainer = React.forwardRef((props, ref) => {
  const projectsRef = ref || useRef(null);

  const { t, i18 } = useTranslation();

  const languages = [
    { code: "en", name: "En" },
    { code: "es", name: "Es" },
  ];
  return (
    <div ref={projectsRef} className={`${ProjectsCSS.projectsContainer}`}>
      <div className={`${ProjectsCSS.projectsInfo}`}>
        <h1>{t("projectsTitle")}</h1>
        <p>{t("projectsInfo")}</p>
      </div>
      <div className={`${ProjectsCSS.cardWrapper}`}>
        <ProjectCard
          live={"https://somospaoyale.com/"}
          gitHub={"https://github.com/carloseperezr/somospaoyale"}
          title="Equilibrium"
          img={"https://i.postimg.cc/d1c0vy29/Equilibrium-Banner.pngnpm"}
          description={t("projectsEquilibrium")}
          skeletonText={false}
          js={true}
          react={true}
          css={true}
        />
        <ProjectCard
          live={"https://rcautoacc.com/"}
          gitHub={"https://github.com/carloseperezr/RCAcc"}
          title="RCAutoacc"
          img={"https://i.postimg.cc/76QWK8Fn/Screenshot-2024-01-25-143359.png"}
          description={t("projectsRCAcc")}
          skeletonText={false}
          js={true}
          react={true}
          css={true}
        />
        <ProjectCard
          live={"https://psico-eze.vercel.app/"}
          gitHub={"https://github.com/carloseperezr/psico_eze"}
          title="Psico.Eze"
          img={"https://i.postimg.cc/x1X9cC16/psicoeze.png"}
          description={t("projectsPsicoEze")}
          skeletonText={false}
          js={true}
          react={true}
          css={true}
        />
        <ProjectCard
          live={"https://easyweb-agency.vercel.app/"}
          gitHub={"https://github.com/carloseperezr/portfolio"}
          title="EasyWeb"
          img={"https://i.postimg.cc/pL6pnvtm/easyWeb.png"}
          description={t("projectsEasyWeb")}
          skeletonText={false}
          js={true}
          react={true}
          css={true}
        />
      </div>
    </div>
  );
});

export default ProjectsContainer;
