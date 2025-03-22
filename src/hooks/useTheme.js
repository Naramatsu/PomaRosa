import { useContext } from "react";
import { PreferencesContext } from "../context";
import { generatedThemeStyles } from "../utils/constants";

const useTheme = () => {
  const { theme, setTheme } = useContext(PreferencesContext);
  const {
    themeTextColor,
    themeTitleTextColor,
    themeBorderColor,
    themeBgColor,
    themeActive,
    themeHover,
    themeTextAlternativeColor,
    themeBorderAlternativeColor,
    warningThemeBgColor,
  } = generatedThemeStyles(theme);

  return {
    theme,
    setTheme,
    themeTextColor,
    themeTitleTextColor,
    themeBorderColor,
    themeBgColor,
    themeActive,
    themeHover,
    themeTextAlternativeColor,
    themeBorderAlternativeColor,
    warningThemeBgColor,
  };
};

export default useTheme;
