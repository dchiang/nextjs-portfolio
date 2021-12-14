import { ThemeContext } from "../context/ThemeContext";
import { PortfolioContext } from "../context/PortfolioContext";
import { useContext } from "react";
import Location from "./Location";

const Header = (props) => {
  const { toggle } = useContext(ThemeContext);
  const { portfolio } = useContext(PortfolioContext);
  const ic = { icon: "moon" };
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
            <div className="column is-one-third has-text-right has-text-centered-mobile">
              <img
                src={portfolio.profile.avatarUrl}
                alt="Daniel Chiang Guerrero"
                width="200"
                height="200"
              />
            </div>
            <div className="column is-three-fifths">
              <p className="title has-text-white-ter">Daniel Chiang Guerrero</p>
              <p className="subtitle is-4 mb-2 has-text-white-ter">
                Full Stack Developer
              </p>
              <p className="block has-text-justified mb-1">
                I am a Computer Science Engineer with 10 years of experience in
                the Software industry, mostly leading development teams, working
                with SCRUM methodology, taking care of customer relationship and
                designing software solutions. I am looking for an opportunity to
                get back to development in order to sharp my coding skills while
                learning new technology stacks.
              </p>
              <Location />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Header;
