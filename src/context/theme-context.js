import { createContext } from "react";

const ThemeContext = createContext({
  darkTheme: "",
  toggleTheme: () => {},
});

export default ThemeContext;
