import { useState } from "react";
import ThemeContext from "./theme-context";

const ThemeProvider = (props) => {
  const [currTheme, setCurrTheme] = useState(localStorage.getItem("darkTheme"));

  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light-theme");
  }

  const toggleThemeHandler = () => {
    localStorage.setItem(
      "theme",
      currTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
    setCurrTheme(currTheme === "light-theme" ? "dark-theme" : "light-theme");
  };

  const themeCtx = {
    theme: currTheme,
    toggleTheme: toggleThemeHandler,
  };

  return (
    <ThemeContext.Provider value={themeCtx}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
