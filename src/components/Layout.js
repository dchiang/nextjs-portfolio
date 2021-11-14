import Navbar from "./Navbar";
import { useState } from "react";

const Layout = (props) => {
  const handleTheme = (event) => {
    let newState = "";
    if (state === "") {
      newState = "checked";
    }
    setState(newState);
  };

  return (
    <>
      <Navbar onThemeChange={handleTheme} />
      {props.children}
    </>
  );
};

export default Layout;
