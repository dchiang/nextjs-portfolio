import Carousel from "./carousel/Carousel";
import LanguagesRadar from "./LanguagesRadar";
import LanguageBars from "./LanguageBars";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const Skills = (props) => {
  const { toggle } = useContext(ThemeContext);
  const percentage = (amountUsed) => {
    const percentage = (100 * amountUsed) / props.languagesUsed.totalSize;
    return percentage.toFixed(2);
  };

  const languagesUsed = Object.fromEntries(
    Object.entries(props.languagesUsed.list).map(([key, value]) => {
      return [key, percentage(value)];
    })
  );

  const style = { height: "25em", width: "20em" };

  return (
    <div
      className={`${props.className} has-border-1-${toggle ? "dark" : "light"}`}
      style={props.style}
    >
      <label
        className={`title is-4 pl-2 has-text-${
          toggle ? "black-ter" : "link-dark"
        }`}
      >
        Skills
      </label>
      <Carousel style={style} darkTheme={toggle}>
        <div>
          <LanguageBars data={languagesUsed} darkTheme={toggle} />
        </div>
        <LanguagesRadar data={languagesUsed} darkTheme={toggle} />
      </Carousel>
    </div>
  );
};

export default Skills;
