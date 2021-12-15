import classes from "./carousel.module.scss";

const Arrow = (props) => {
  const { className, style, onClick } = props;
  const customClasses = props.darkTheme
    ? classes.carouselArrowDark
    : classes.carouselArrowLight;

  return (
    <button
      className={`${className} ${customClasses} is-hidden-mobile`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

export default Arrow;
