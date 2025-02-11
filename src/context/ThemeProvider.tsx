import { useState } from "react";
import ThemeContext from "./theme-context";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const [currTheme, setCurrTheme] = useState("light-theme");

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
