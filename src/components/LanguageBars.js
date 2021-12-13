const LanguageBars = (props) => {
  const data = Object.entries(props.data).map(([key, value]) => {
    return (
      <li key={key}>
        <p>{key}</p>
        <progress
          className={`progress ${props.darkTheme ? "" : "is-link"}`}
          value={value}
          max="100"
        ></progress>
      </li>
    );
  });

  return <ul>{data}</ul>;
};

export default LanguageBars;
