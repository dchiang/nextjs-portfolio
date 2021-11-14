import { useState } from "react";
import ThemeTogglerButton from "./ThemeTogglerButton";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Navbar = (props) => {
  const { toggle } = useContext(ThemeContext);
  const [navbarState, setNavbarState] = useState("");
  const [dropdownState, setDropdownState] = useState("is-hidden-mobile");

  const handleDropdownState = (event) => {
    let newState = "is-hidden-mobile";
    if (dropdownState !== "") {
      newState = "";
    }
    setDropdownState(newState);
  };

  const handleNavbarState = (event) => {
    let newState = "";
    if (navbarState === "") {
      newState = "is-active";
    }
    setNavbarState(newState);
  };

  return (
    <nav
      className={`navbar is-fixed-top is-${!toggle ? "white" : "dark"}`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://dchiang.github.io">
          <img
            src={require(`../../public/pictures/portfolio-logos/Portfolio-${
              !toggle ? "" : "Light-"
            }logo.svg`)}
            width="112"
            height="28"
            alt="https://dchiang.github.io"
          />
        </a>

        <a
          role="button"
          className={`navbar-burger ${navbarState}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={handleNavbarState}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${navbarState}`}>
        <div className="navbar-start">
          <a className="navbar-item">Experience</a>
          <a className="navbar-item">Projects</a>
          <a className="navbar-item">About</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" onClick={handleDropdownState}>
              More
            </a>
            <div className={`navbar-dropdown ${dropdownState}`}>
              <a className="navbar-item">Leave your feedback</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <a className="navbar-item" href="https://github.com/dchiang">
            <img
              src={require(`../../public/pictures/GitHub-Mark/PNG/GitHub-Mark-${
                !toggle ? "" : "Light-"
              }120px-plus.svg`)}
              alt="https://github.com/dchiang"
            />
          </a>
          <a
            className="navbar-item"
            href="https://www.linkedin.com/in/daniel-chiang-guerrero/"
          >
            <img
              src={require(`../../public/pictures/LinkedIn-Logos/LI-In-${
                !toggle ? "" : "Light-"
              }Bug.svg`)}
              alt="https://www.linkedin.com/in/daniel-chiang-guerrero/"
            />
          </a>
          <ThemeTogglerButton className="navbar-item" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
