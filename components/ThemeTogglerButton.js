import ToggleButton from "./ToogleButton";

const ThemeTooglerButton = (props) => {
  const background = "is-dark";
  const iconStyle = {
    color: "Yellow",
  };

  const style = props.style
    ? props.style
    : {
        checked: {
          icon: "moon",
          background: background,
          iconStyle: iconStyle,
        },
        unchecked: {
          icon: "sun",
          background: background,
          iconStyle: iconStyle,
        },
      };

  const handleClick = () => {};
  return (
    <ToggleButton
      defaultChecked={false}
      style={style}
      onChange={handleClick}
      className={props.className}
    />
  );
};

export default ThemeTooglerButton;
