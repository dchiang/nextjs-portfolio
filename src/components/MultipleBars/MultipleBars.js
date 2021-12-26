import Legend from "./Legend";

const MultipleBars = (props) => {
  const bars = props.bars;

  const barStyle = (bar) => {
    let style = {
      width: `${bar.size}%`,
      minHeight: props.height,
      backgroundColor: bar.backgroundColor,
    };
    return style;
  };
  return (
    <div className={props.className}>
      <div
        className="level progress is-mobile mb-1"
        style={{ maxWidth: "100%" }}
      >
        {bars.map((bar, index) => {
          return (
            <div
              key={index}
              id={`bar${index}`}
              className="level-item mr-0"
              style={barStyle(bar)}
            ></div>
          );
        })}
      </div>
      {props.showLegend ? <Legend bars={bars} /> : ""}
    </div>
  );
};

export default MultipleBars;
