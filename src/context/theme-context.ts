import { createContext } from "react";

interface ThemeContextStructure {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextStructure>({
  theme: "",
  toggleTheme: () => {},
});

export default ThemeContext;
