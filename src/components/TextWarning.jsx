import useTheme from "../hooks/useTheme";

const TextWarning = ({ children }) => {
  const { warningThemeBgColor, themeTextAlternativeColor } = useTheme();

  return (
    <p
      className={`text-xs ${themeTextAlternativeColor} ${warningThemeBgColor} p-4 text-center polygon`}
    >
      {children}
    </p>
  );
};

export default TextWarning;
