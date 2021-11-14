import Toggle from "react-toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ToogleButton = (props) => {
  const [state, setState] = useState(false);
  const style = props.style;
  const defaultChecked = props.defaultChecked;

  const handleChange = (event) => {
    setState(!state);
  };

  return (
    <label className={props.className}>
      <Toggle
        defaultChecked={defaultChecked}
        icons={{
          checked: (
            <FontAwesomeIcon
              icon={style.checked.icon}
              style={style.checked.iconStyle}
            />
          ),
          unchecked: (
            <FontAwesomeIcon
              icon={style.unchecked.icon}
              style={style.unchecked.iconStyle}
            />
          ),
        }}
        onChange={handleChange}
      />
    </label>
  );
};

export default ToogleButton;
