import styles from "../../styles/Home.module.css";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <a href="https://bulma.io">
        <img
          src="https://bulma.io/images/made-with-bulma.png"
          alt="Made with Bulma"
          width="256"
          height="48"
        />
      </a>
    </footer>
  );
};
export default Footer;
