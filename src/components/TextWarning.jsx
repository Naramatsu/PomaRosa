import useTheme from "../hooks/useTheme";
import { generatedThemeStyles } from "../utils/constants";

const TextWarning = ({ children }) => {
  const [theme] = useTheme();
  const { themeGreen } = generatedThemeStyles(theme);

  return (
    <p className={`text-xs ${themeGreen} text-center lexend`}>{children}</p>
  );
};

export default TextWarning;
