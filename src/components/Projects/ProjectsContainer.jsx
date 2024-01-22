import React, { useRef } from "react";
import { ProjectCard } from "./ProjectCard";
import ProjectsCSS from "./Projects.module.css";

const ProjectsContainer = React.forwardRef((props, ref) => {
  const projectsRef = ref || useRef(null);

  return (
    <div ref={projectsRef} className={`${ProjectsCSS.projectsContainer}`}>
      <div className={`${ProjectsCSS.projectsInfo}`}>
        <h1>Proyectos</h1>
        <p>
          Con pasión he creado experiencias digitales notables, fusionando cada
          detalle con el buen gusto, lo que define mí enfoque distintivo en cada
          proyecto realizado.
        </p>
      </div>
      <div className={`${ProjectsCSS.cardWrapper}`}>
        <ProjectCard
          live={"https://somospaoyale.com/"}
          gitHub={"https://github.com/carloseperezr/somospaoyale"}
          title="Equilibrium"
          description="Desarrollo de página web + correo electrónico elegante y minimalista, donde cada detalle refleja precisión y buen gusto en el desarrollo digital."
          skeletonText={false}
          js={true}
          react={true}
          css={true}
        />
        <ProjectCard
          title="Comming Soon"
          description={"Proyecto de prueba"}
          skeletonText={"Comming soon"}
          img={false}
          skeleton={true}
        />
        <ProjectCard
          title="Comming Soon"
          description="Proyecto de prueba"
          skeletonText="Comming soon"
          img={false}
          skeleton={true}
        />
        <ProjectCard
          title="Comming Soon"
          description="Proyecto de prueba"
          skeletonText="Comming soon"
          img={false}
          skeleton={true}
        />
        <ProjectCard
          title="Comming Soon"
          description="Proyecto de prueba"
          skeletonText="Comming soon"
          img={false}
          skeleton={true}
        />
        <ProjectCard
          title="Comming Soon"
          description="Proyecto de prueba"
          skeletonText="Comming soon"
          img={false}
          skeleton={true}
        />
      </div>
    </div>
  );
});

export default ProjectsContainer;
