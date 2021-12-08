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
            <div className="column is-one-third has-text-right has-text-centered-mobile">
              <img
                src={require(`../../public/pictures/Daniel.svg`)}
                alt="Daniel Chiang Guerrero"
                width="200"
                height="200"
              />
            </div>
            <div className="column is-three-fifths">
              <p className="title has-text-white-ter">Daniel Chiang Guerrero</p>
              <p className="subtitle mb-3 has-text-white-ter">
                Full Stack Developer
              </p>
              <p className="block has-text-justified">
                I am a Computer Science Engineer with 10 years of experience in
                the Software industry, mostly leading development teams, working
                with SCRUM methodology, taking care of customer relationship and
                designing software solutions. I am looking for an opportunity to
                get back to development in order to sharp my skills while
                learning new technology stacks.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Header;
