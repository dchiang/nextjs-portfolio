import { ThemeContext } from "../context/ThemeContext";
import { PortfolioContext } from "../context/PortfolioContext";
import { useContext } from "react";
import Repository from "./Repository";

const Projects = (props) => {
  const repositoriesPerRow = 4;
  const { toggle } = useContext(ThemeContext);
  const { portfolio } = useContext(PortfolioContext);

  const remainder = (firstOperand, secondOperand) => {
    return firstOperand % secondOperand;
  };

  const splitRepos = (start, stop) => {
    const repositories = portfolio.repositories.slice(start, stop);
    return (
      <div key={"ancestor" + start} className="tile is-ancestor">
        {repositories.map((repository) => {
          const key = start++;
          return (
            <Repository
              key={"rep" + key}
              darkTheme={toggle}
              repository={repository}
            />
          );
        })}
      </div>
    );
  };
  const getRepositories = () => {
    let repos = [];
    for (let index = 0; index < portfolio.repositories.length; index++) {
      if (index % repositoriesPerRow === 0) {
        repos = repos.concat(splitRepos(index, index + repositoriesPerRow));
      }
    }
    return repos;
  };
  return (
    <div
      className={`columns mt-4 has-background-${
        toggle ? "black-ter" : "link"
      } ${props.className}`}
    >
      <div className="column is-10 is-offset-1">{getRepositories()}</div>
    </div>
  );
};

export default Projects;
