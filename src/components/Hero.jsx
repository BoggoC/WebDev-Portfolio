import { useFetchData } from "./fetchData";

const Hero = () => {
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
    <section id="home" className="hero">
      <div className="wrapper">
        {homePage.map((homePageComponent) => {
          const { heroId, heroImg, heroTxt, socialLink } = homePageComponent;
          return (
            <article key={heroId} className="hero-container">
              <div className="hero-image">
                <img src={heroImg} alt="Bogdan Cocis" className="image" />
              </div>
              <div className="hero-right">
                <div className="about-text">{heroTxt}</div>

                <div className="socials">
                  {socialLink.map((socials) => {
                    const { socialId, socialImg, socialTitle, socialUrl } =
                      socials;
                    // console.log(socials);
                    return (
                      <div key={socialId} className="social-btn-container">
                        <a href={socialUrl} target="_blank" rel="noreferrer">
                          <img
                            src={socialImg}
                            alt={socialTitle}
                            className="btn-container"
                          />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
