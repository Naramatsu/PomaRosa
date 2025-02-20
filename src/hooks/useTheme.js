import { useContext } from "react";
import { PreferencesContext } from "../context";
import { generatedThemeStyles } from "../utils/constants";

const useTheme = () => {
  const { theme, setTheme } = useContext(PreferencesContext);
  const {
    themeTextColor,
    themeBorderColor,
    themeBgColor,
    themeActive,
    themeHover,
    themeGreen,
    themeTextSecudaryColor,
    themeTextAlternativeColor,
    themeBorderAlternativeColor,
  } = generatedThemeStyles(theme);

  return {
    theme,
    setTheme,
    themeTextColor,
    themeBorderColor,
    themeBgColor,
    themeActive,
    themeHover,
    themeGreen,
    themeTextSecudaryColor,
    themeTextAlternativeColor,
    themeBorderAlternativeColor,
  };
};

export default useTheme;
