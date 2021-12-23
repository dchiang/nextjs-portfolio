import { useEffect, useState } from "react";
import classes from "./legend.module.scss";

const Legend = (props) => {
  const [legends, setLegends] = useState([]);
  const bars = props.bars;

  useEffect(() => {
    const getLegends = () => {
      const legendList = bars.map((bar, index) => {
        let color = "";
        if (typeof window !== "undefined") {
          if (bar.backgroundColor) {
            const domElement = document.getElementById("bar" + index);
            color = domElement.style.backgroundColor;
          } else {
            const domElement = document.querySelector(
              `.${bar.backgroundClass}`
            );
            const elementStyle = getComputedStyle(domElement);
            color = elementStyle.backgroundColor;
          }
        }
        return { color: color, name: bar.name };
      });
      return legendList;
    };
    setLegends(getLegends);
  }, [bars]);

  return (
    <div className="content">
      <ul>
        {legends.map((legend, index) => {
          return (
            <li
              key={index}
              className={classes.legend}
              style={{ "--color": legend.color }}
            >
              {legend.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Legend;
