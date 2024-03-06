import { useFetchData } from "./fetchData";

const Hero = () => {
  const { loading, hero } = useFetchData();
  if (loading) {
    return (
      <section className="hero">
        <h2>Loading...</h2>
      </section>
    );
  }
  return (
    <section className="wrapper">
      <div className="hero">
        {hero.map((heroComponent) => {
          const { heroId, heroImg, heroTxt, socialLink } = heroComponent;
          // console.log(heroComponent);
          // console.log(socialLink);
          return (
            <article key={heroId} className="hero-container">
              <div className="hero-image">
                <img src={heroImg} alt="image" className="image" />
              </div>
              <div className="hero-right">
                <div className="about-text">{heroTxt}</div>
                <div className="socials">
                  {socialLink.map((socials) => {
                    const { socialId, socialImg, socialTitle, socialUrl } =
                      socials;
                    return (
                      <div className="social-btn-container">
                        <a
                          key={socialId}
                          href={socialUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
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
