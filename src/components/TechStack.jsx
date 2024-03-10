import { useFetchData } from "./fetchData";

const TechStack = () => {
  const { homePage } = useFetchData();
  // const { loading, homePage } = useFetchData();

  // if (loading) {
  //   return (
  //     <section className="hero">
  //       <h2>Loading...</h2>
  //     </section>
  //   );
  // }

  return (
    <section id="techStack" className="tech-stack">
      <div className="wrapper">
        {homePage.map((homePageComponent) => {
          const { techStackId, techStackTitle, techStackCard } =
            homePageComponent;
          return (
            <article key={techStackId} className="hero-container">
              <h2 className="tech-stack-title">{techStackTitle}</h2>

              <div className="tech-stack-card-container">
                {techStackCard.map((techStackCardComponent) => {
                  const {
                    techStackCardId,
                    techStackCardImg,
                    techStackCardTitle,
                    techStackCardText,
                  } = techStackCardComponent;
                  return (
                    <div key={techStackCardId} className="tech-stack-card">
                      <div className="tech-stack-logo-container">
                        <img
                          src={techStackCardImg}
                          alt={techStackCardTitle}
                          className="tech-stack-logo"
                        />
                      </div>
                      <h4 className="tech-stack-card-title">
                        {techStackCardTitle}
                      </h4>
                      <p className="tech-stack-card-text">
                        {techStackCardText}
                      </p>
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

export default TechStack;
