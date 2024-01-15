import { ProjectCard } from "./ProjectCard";
import ProjectsCSS from "./Projects.module.css";

export const ProjectsContainer = () => {
  return (
    <div className={`${ProjectsCSS.projectsContainer}`}>
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
          description="Página web y correo electronico elegante y minimalista, donde cada detalle refleja precisión y buen gusto en el desarrollo digital"
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
};
