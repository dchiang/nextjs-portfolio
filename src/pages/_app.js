import "../../styles/globals.css";
import "../../styles/general.scss";
import "../../styles/ToogleButton.css";
import { ThemeProvider } from "../context/ThemeContext";
import { PortfolioProvider } from "../context/PortfolioContext";

function MyApp({ Component, pageProps }) {
  return (
    <PortfolioProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </PortfolioProvider>
  );
}

export default MyApp;
