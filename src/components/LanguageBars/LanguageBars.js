import classes from "./languagebars.module.scss";

const LanguageBars = (props) => {
  const data = props.data.map((language) => {
    return (
      <li key={language.name}>
        <p>{language.name}</p>
        <progress
          className={`progress  ${classes.progress}`}
          style={{ "--background-color": language.color }}
          value={language.value}
          max="100"
        ></progress>
      </li>
    );
  });

  return <ul>{data}</ul>;
};

export default LanguageBars;
