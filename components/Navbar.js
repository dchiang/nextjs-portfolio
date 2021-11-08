const Navbar = (props) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://dchiang.github.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
            alt="https://dchiang.github.io"
          />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">Home</a>

          <a className="navbar-item">Documentation</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a
                className="button is-primary"
                href="https://github.com/dchiang"
              >
                <img
                  src={require("../public/pictures/GitHub-Mark/PNG/GitHub-Mark-120px-plus.svg")}
                  alt="https://github.com/dchiang"
                ></img>
              </a>
              <a
                className="button is-light"
                href="https://www.linkedin.com/in/daniel-chiang-guerrero/"
              >
                <img
                  src={require("../public/pictures/LinkedIn-Logos/LI-In-Bug.svg")}
                  alt="https://www.linkedin.com/in/daniel-chiang-guerrero/"
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
