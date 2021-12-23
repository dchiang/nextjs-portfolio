import Legend from "./Legend";

const MultipleBars = (props) => {
  const bars = props.bars;
  // const bars = [
  //   {
  //     name: "HTML",
  //     size: 4.21,
  //     backgroundClass: "has-background-white",
  //     backgroundColor: "",
  //   },
  //   {
  //     name: "CSS",
  //     size: 10.94,
  //     backgroundClass: "has-background-warning",
  //     backgroundColor: "",
  //   },
  //   {
  //     name: "JavaScript",
  //     size: 84.85,
  //     backgroundClass: "has-background-dark",
  //     backgroundColor: "yellow !important",
  //   },
  // ];

  const barStyle = (bar) => {
    let style = {
      width: `${bar.size}%`,
      minHeight: props.height,
    };
    if (bar.backgroundColor) {
      style.backgroundColor = bar.backgroundColor;
    }
    return style;
  };
  return (
    <div className={props.className}>
      <div
        className="level progress is-mobile mb-0"
        style={{ maxWidth: "100%" }}
      >
        {bars.map((bar, index) => {
          return (
            <div
              key={index}
              id={`bar${index}`}
              className={`level-item mr-0 ${
                bar.backgroundColor ? "" : bar.backgroundClass
              }`}
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
