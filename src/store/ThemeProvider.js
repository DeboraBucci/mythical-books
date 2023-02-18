import { useState } from "react";
import ThemeContext from "./theme-context";

const ThemeProvider = (props) => {
  const [currTheme, setCurrTheme] = useState(localStorage.getItem("darkTheme"));

  if (!localStorage.getItem("darkTheme")) {
    localStorage.setItem("darkTheme", "light-theme");
  }

  const toggleThemeHandler = () => {
    localStorage.setItem(
      "darkTheme",
      currTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
    setCurrTheme(currTheme === "light-theme" ? "dark-theme" : "light-theme");
  };

  const themeCtx = {
    darkTheme: currTheme,
    toggleTheme: toggleThemeHandler,
  };

  return (
    <ThemeContext.Provider value={themeCtx}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
