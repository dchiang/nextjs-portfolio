import "../../styles/globals.css";
import "../../styles/general.scss";
import "../../styles/ToogleButton.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider } from "../context/ThemeContext";

library.add(faSun, faMoon);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
