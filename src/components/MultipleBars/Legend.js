import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faCircle);

const Legend = (props) => {
  const bars = props.bars;

  return (
    <div className="content">
      {bars.map((bar, index) => {
        return (
          <span key={index} className="icon-text">
            <span className="icon is-small mt-1">
              <FontAwesomeIcon
                icon="circle"
                style={{ color: bar.backgroundColor }}
              />
            </span>
            <span className="mr-3 mb-1">{bar.name}</span>
          </span>
        );
      })}
    </div>
  );
};

export default Legend;
