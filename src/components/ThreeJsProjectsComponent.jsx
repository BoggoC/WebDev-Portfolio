import { useFetchData } from "./fetchData";

const ThreeJsProjectsComponent = () => {
  const { homePage } = useFetchData();

  return (
    <section id="projects" className="projects">
      <div className="wrapper">
        {homePage.map((homePageComponent) => {
          const {
            threeProjectsId,
            threeProjectsTitle,
            threeProjectsCardsTxt,
            threeProjectsCards,
          } = homePageComponent;

          return (
            <article key={threeProjectsId} className="three-projects-container">
              <h1 className="three-projects-title">{threeProjectsTitle}</h1>
              <p className="three-projects-txt"> {threeProjectsCardsTxt}</p>

              <div className="three-project-card-container">
                {threeProjectsCards.map((threeProjectCardComponent) => {
                  const {
                    threeProjectsCardId,
                    threeProjectsCardImage,
                    projectCardTitle,
                    threeProjectsCardTxt,
                    projectCardUrl,
                  } = threeProjectCardComponent;

                  return (
                    <div
                      key={threeProjectsCardId}
                      className="projects-cards project-card three-cards"
                    >
                      <a
                        href={projectCardUrl}
                        target="_blank"
                        rel=" noreferrer"
                        className="project-card"
                      >
                        <img
                          src={threeProjectsCardImage}
                          alt={projectCardTitle}
                          className="project-image"
                        />

                        <h4 className="project-card-title">
                          {projectCardTitle}
                        </h4>
                        <p className="project-card-text">
                          {threeProjectsCardTxt}
                        </p>
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

export default ThreeJsProjectsComponent;
