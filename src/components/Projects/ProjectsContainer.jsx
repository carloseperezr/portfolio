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
          img={"https://i.postimg.cc/d1c0vy29/Equilibrium-Banner.pngnpm"}
          description='"Equilibrium" creada con ReactJS y CSS Modules. Una mezcla de diseño y funcionalidad, esta página web fusiona la potencia de React con la modularidad de CSS para brindarte una buena experiencia de uso.'
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
          description="Explora la web de RCAutoacc, impulsada por ReactJS con elegantes implementaciones de hooks y refs. Descubre accesorios para autos de manera fluida y eficiente en una experiencia de usuario excepcional."
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
