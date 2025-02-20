import useTheme from "../hooks/useTheme";

const TextWarning = ({ children }) => {
  const { themeGreen } = useTheme();

  return (
    <p className={`text-xs ${themeGreen} text-center lexend`}>{children}</p>
  );
};

export default TextWarning;
