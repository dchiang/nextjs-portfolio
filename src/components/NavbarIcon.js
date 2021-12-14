const NavbarIcon = (props) => {
  return (
    <a className={props.className} href={props.href}>
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </a>
  );
};

export default NavbarIcon;
