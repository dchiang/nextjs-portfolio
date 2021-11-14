import { useState, createContext } from "react";

const ThemeContext = createContext(false);

const ThemeProvider = (props) => {
  const [toggle, setToggle] = useState(false);
  const toggleFunction = () => {
    console.log(!toggle);
    setToggle(!toggle);
  };
  return (
    <ThemeContext.Provider value={{ toggle, toggleFunction }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
