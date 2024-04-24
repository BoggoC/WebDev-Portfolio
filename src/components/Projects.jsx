import { useFetchData } from "./fetchData";

const Projects = () => {
  const { homePage } = useFetchData();

  return (
    <section id="projects" className="projects">
      <div className="wrapper">
        {homePage.map((homePageComponent) => {
          const { projectsId, projectsTitle, projectsCard } = homePageComponent;
          return (
            <article key={projectsId} className="projects-container">
              <h2 className="projects-title">{projectsTitle}</h2>

              <div className="project-card-container">
                {projectsCard.map((projectCardComponent) => {
                  const {
                    projectCardId,
                    projectCardImg,
                    projectCardTitle,
                    projectCardTxt,
                    projectCardUrl,
                  } = projectCardComponent;

                  return (
                    <div
                      key={projectCardId}
                      className="projects-cards project-card"
                    >
                      <a
                        href={projectCardUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-cards"
                      >
                        <img
                          src={projectCardImg}
                          alt={projectCardTitle}
                          className="project-image"
                        />
                        <h4 className="project-card-title">
                          {projectCardTitle}
                        </h4>
                        <p className="project-card-text">{projectCardTxt}</p>
                      </a>
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
