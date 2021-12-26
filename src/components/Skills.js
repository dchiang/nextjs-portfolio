import Carousel from "./carousel/Carousel";
import LanguagesRadar from "./LanguagesRadar";
import LanguageBars from "./LanguageBars/LanguageBars";
import { ThemeContext } from "../context/ThemeContext";
import { PortfolioContext } from "../context/PortfolioContext";
import { useContext } from "react";

const Skills = (props) => {
  const { portfolio } = useContext(PortfolioContext);
  const { toggle } = useContext(ThemeContext);
  const style = { height: "25em", width: "20em" };

  const percentage = (amountUsed) => {
    const percentage = (100 * amountUsed) / portfolio.languages.totalSize;
    return percentage.toFixed(2);
  };

  const languagesUsed = portfolio.languages.list.map((language) => {
    return {
      name: language.name,
      value: percentage(language.size),
      color: language.color,
    };
  });
  return (
    <div
      className={`${props.className} has-border-1-${toggle ? "dark" : "light"}`}
      style={props.style}
    >
      <p
        className={`title is-3 pl-2 has-text-${
          toggle ? "black-ter" : "link-dark"
        }`}
      >
        Skills
      </p>
      <Carousel style={style}>
        <div>
          <LanguageBars data={languagesUsed} darkTheme={toggle} />
        </div>
        <LanguagesRadar data={languagesUsed} darkTheme={toggle} />
      </Carousel>
    </div>
  );
};

export default Skills;
