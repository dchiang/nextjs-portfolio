import ToggleButton from "./ToogleButton";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

const ThemeTooglerButton = (props) => {
  const { toggleFunction } = useContext(ThemeContext);
  const background = "is-dark";

  const style = props.style
    ? props.style
    : {
        checked: {
          icon: "moon",
          background: background,
          iconStyle: {
            color: "White",
          },
        },
        unchecked: {
          icon: "sun",
          background: background,
          iconStyle: {
            color: "Yellow",
          },
        },
      };

  return (
    <ToggleButton
      defaultChecked={false}
      style={style}
      onChange={toggleFunction}
      className={props.className}
    />
  );
};

export default ThemeTooglerButton;
