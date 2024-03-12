import { useState, useEffect } from "react";

const links = [
  { id: 0, href: "#home", linksText: "home" },
  { id: 1, href: "#techStack", linksText: "tech-stack" },
  { id: 2, href: "#projects", linksText: "projects" },
];

const Navbar = () => {
  const [sticky, setSticky] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickyNavBar);
  }, []);

  const stickyNavBar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0 ? setSticky("sticky") : setSticky("");
    }
  };

  return (
    <div className={`nav ${sticky}`}>
      <nav className="wrapper">
        <div className="nav-container">
          <h2 className="links-heading">
            Web<span className="links-heading-color">Dev Portfolio</span>
          </h2>
          <div className="links">
            {links.map((link) => {
              const { id, href, linksText } = link;
              return (
                <a key={id} href={href} className="link">
                  {linksText}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
