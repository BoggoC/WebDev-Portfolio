const links = [
  { id: 1, href: "#techStack", linksText: "tech-stack" },
  { id: 2, href: "#about", linksText: "about" },
  { id: 3, href: "#projects", linksText: "projects" },
];

const Navbar = () => {
  return (
    <nav className="wrapper">
      <div className="nav">
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
  );
};

export default Navbar;
