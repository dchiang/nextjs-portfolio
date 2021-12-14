import { useState, useEffect } from "react";
import NavbarIcon from "./NavbarIcon";
import ThemeTogglerButton from "./ThemeTogglerButton";
import { ThemeContext } from "../context/ThemeContext";
import { PortfolioContext } from "../context/PortfolioContext";
import { useContext } from "react";

const Navbar = (props) => {
  const { toggle } = useContext(ThemeContext);
  const { portfolio, getPortfolio } = useContext(PortfolioContext);
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

  useEffect(() => {
    getPortfolio();
  }, []);

  return (
    <nav
      className={`navbar is-fixed-top is-${!toggle ? "white" : "dark"}`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <NavbarIcon
          className="navbar-item"
          href={portfolio.profile.websiteUrl}
          src={require(`../../public/pictures/portfolio-logos/Portfolio-${
            !toggle ? "" : "Light-"
          }logo.svg`)}
          width="112"
          height="28"
          alt={portfolio.profile.websiteUrl}
        />
        <NavbarIcon
          className="navbar-item bd-navbar-mobile-icon"
          href={portfolio.profile.url}
          src={require(`../../public/pictures/GitHub-Mark/PNG/GitHub-Mark-${
            !toggle ? "" : "Light-"
          }120px-plus.svg`)}
          alt={portfolio.profile.url}
        />
        <NavbarIcon
          className="navbar-item bd-navbar-mobile-icon"
          href="https://www.linkedin.com/in/daniel-chiang-guerrero/"
          src={require(`../../public/pictures/LinkedIn-Logos/LI-In-${
            !toggle ? "" : "Light-"
          }Bug.svg`)}
          alt="https://www.linkedin.com/in/daniel-chiang-guerrero/"
        />
        <ThemeTogglerButton className="navbar-item bd-navbar-mobile-icon" />
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

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${navbarState} ${
          !toggle ? "" : "has-background-dark"
        }`}
      >
        <div className="navbar-start">
          <a className={`navbar-item ${!toggle ? "" : "has-text-white-ter"}`}>
            Experience
          </a>
          <a className={`navbar-item ${!toggle ? "" : "has-text-white-ter"}`}>
            Projects
          </a>
          <a className={`navbar-item ${!toggle ? "" : "has-text-white-ter"}`}>
            About
          </a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a
              className={`navbar-link ${!toggle ? "" : "has-text-white-ter"}`}
              onClick={handleDropdownState}
            >
              More
            </a>
            <div
              className={`navbar-dropdown ${dropdownState} ${
                !toggle ? "" : "has-background-dark"
              }`}
            >
              <a
                className={`navbar-item ${
                  !toggle ? "" : "has-text-white-ter navbar-dropdown-dark"
                }`}
              >
                Leave your feedback
              </a>
              <hr
                className={`navbar-divider ${
                  !toggle ? "" : "has-background-white-ter"
                }`}
              />
              <a
                className={`navbar-item ${
                  !toggle ? "" : "has-text-white-ter navbar-dropdown-dark"
                }`}
              >
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <NavbarIcon
            className="navbar-item bd-navbar-icon"
            href={portfolio.profile.url}
            src={require(`../../public/pictures/GitHub-Mark/PNG/GitHub-Mark-${
              !toggle ? "" : "Light-"
            }120px-plus.svg`)}
            alt={portfolio.profile.url}
          />
          <NavbarIcon
            className="navbar-item bd-navbar-icon"
            href="https://www.linkedin.com/in/daniel-chiang-guerrero/"
            src={require(`../../public/pictures/LinkedIn-Logos/LI-In-${
              !toggle ? "" : "Light-"
            }Bug.svg`)}
            alt="https://www.linkedin.com/in/daniel-chiang-guerrero/"
          />
          <ThemeTogglerButton className="navbar-item bd-navbar-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
