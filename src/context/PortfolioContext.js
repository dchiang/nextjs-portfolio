import { useState, createContext } from "react";
import { githubPortfolio } from "../../profile";
import axios from "axios";

const PortfolioContext = createContext(githubPortfolio);

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
    axios
      .get(requestUrl)
      .then((response) => {
        const portfolioResponse = response.data;
        portfolioResponse.jobs = githubPortfolio.jobs;
        setPortfolio(portfolioResponse);
      })
      .catch((err) => {
        if (err.response) {
          console.log(JSON.stringify(err.response.data));
        } else {
          console.log(JSON.stringify(err));
        }
      });
  };

  return (
    <PortfolioContext.Provider value={{ portfolio, getPortfolio }}>
      {props.children}
    </PortfolioContext.Provider>
  );
};

export { PortfolioContext, PortfolioProvider };
