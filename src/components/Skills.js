import Carousel from "./carousel/Carousel";
import LanguagesRadar from "./LanguagesRadar";
import LanguageBars from "./LanguageBars";

const Skills = (props) => {
  const percentage = (amountUsed) => {
    const percentage = (100 * amountUsed) / props.languagesUsed.totalSize;
    return percentage.toFixed(2);
  };

  const languagesUsed = Object.fromEntries(
    Object.entries(props.languagesUsed.list).map(([key, value]) => {
      return [key, percentage(value)];
    })
  );

  const style = { height: "20em", width: "20em" };

  return (
    <div style={{ paddingLeft: "2rem" }}>
      <label className="title is-4 has-text-black-ter">Skills</label>
      <div>
        <Carousel style={style} darkTheme={false}>
          <div>
            <LanguageBars data={languagesUsed} darkTheme={false} />
          </div>
          <LanguagesRadar data={languagesUsed} darkTheme={false} />
        </Carousel>
      </div>
    </div>
  );
};

export default Skills;
