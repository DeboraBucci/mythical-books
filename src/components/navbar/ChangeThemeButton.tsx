import ThemeContext from "context/theme-context";
import { useContext } from "react";

const ChangeThemeButton = () => {
  const themeCtx = useContext(ThemeContext);

  const toggleThemeHandler = () => {
    themeCtx?.toggleTheme();
  };

  return (
    <button
      onClick={toggleThemeHandler}
      className="navbar__btn navbar__btn--theme"
    >
      <i className="fa-solid fa-circle-half-stroke"></i>
    </button>
  );
};

export default ChangeThemeButton;
