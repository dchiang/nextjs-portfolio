import classes from "./carousel.module.css";

const Arrow = (props) => {
  const { className, style, onClick } = props;
  const customClasses = props.darkTheme
    ? classes.carouselArrowDark
    : classes.carouselArrowLight;

  return (
    <button
      className={`${className} ${customClasses}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

export default Arrow;
