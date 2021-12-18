import Job from "./Job";
import { ThemeContext } from "../context/ThemeContext";
import { PortfolioContext } from "../context/PortfolioContext";
import { useContext } from "react";

const Experience = (props) => {
  const { toggle } = useContext(ThemeContext);
  const { portfolio } = useContext(PortfolioContext);

  return (
    <div
      className={`${props.className} has-border-1-${toggle ? "dark" : "light"}`}
    >
      <p
        className={`title is-3  has-text-${toggle ? "black-ter" : "link-dark"}`}
      >
        Experience
      </p>
      <div
        className="mt-0"
        style={{ overflow: "auto", maxHeight: "30rem", overfloX: "hidden" }}
      >
        {portfolio.jobs.map((element, index) => {
          return (
            <Job
              className="mb-5"
              key={index}
              job={element}
              darkTheme={toggle}
            />
          );
        })}
      </div>
      <ul></ul>
    </div>
  );
};

export default Experience;
