import "../../styles/globals.css";
import "../../styles/general.scss";
import "../../styles/ToogleButton.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

library.add(faSun, faMoon);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
