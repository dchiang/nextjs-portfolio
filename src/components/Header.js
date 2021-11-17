import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Header = (props) => {
  const { toggle } = useContext(ThemeContext);

  return (
    <section>
      <section className="hero is-small">
        <div className="hero-body"></div>
      </section>
      <section
        className={`hero is-medium ${
          !toggle ? "is-link" : "has-background-black-ter has-text-white-ter"
        }`}
      >
        <div className="hero-body">
          <div className="columns">
            <div className="column is-two-fifths has-text-right has-text-centered-mobile">
              <img
                src={require(`../../public/pictures/Daniel.svg`)}
                alt="Daniel Chiang Guerrero"
                width="200"
                height="200"
              />
            </div>
            <div className="column has-text-justified">
              <p className="title has-text-white-ter">Daniel Chiang Guerrero</p>
              <p className="subtitle mb-3 has-text-white-ter">
                Full Stack Developer
              </p>
              <p className="block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Header;
