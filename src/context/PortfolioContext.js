import { useState, createContext } from "react";
import githubPortfolio from "../../profile";

const PortfolioContext = createContext(false);

const PortfolioProvider = (props) => {
  const [portfolio, setPortfolio] = useState(githubPortfolio);

  const getPortfolio = () => {
    const login = "dchiang";
    const reposAmount = 10;
    const languagesAmount = 10;
    const apiUrl = process.env.NEXT_PUBLIC_GITHUB_PORTFOLIO_API;
    const endpoint = `${apiUrl}/github-portfolio`;
    const queryParams = `repos-amount=${reposAmount}&languages-amount=${languagesAmount}`;
    const requestUrl = `${endpoint}/${login}?${queryParams}`;
    axios.get(requestUrl).then((response) => {
      setPortfolio(response.data);
    });
  };

  return (
    <PortfolioContext.Provider value={{ portfolio, getPortfolio }}>
      {props.children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfolioProvider };
