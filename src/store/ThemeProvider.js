import { useState } from "react";
import ThemeContext from "./theme-context";

const ThemeProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleThemeHandler = () => setDarkTheme((theme) => !theme);

  const themeCtx = {
    darkTheme: darkTheme,
    toggleTheme: toggleThemeHandler,
  };

  return (
    <ThemeContext.Provider value={themeCtx}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
