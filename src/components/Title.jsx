import useTheme from "../hooks/useTheme";
import { generatedThemeStyles } from "../utils/constants";

const Title = ({ children, subTitle }) => {
  const [theme] = useTheme();
  const { themeTextColor, themeBorderColor } = generatedThemeStyles(theme);
  const size = subTitle ? "text-2xl" : "text-3xl uppercase";
  const showBorder = subTitle
    ? ""
    : `border-b-2 border-dashed ${themeBorderColor}`;

  return (
    <section
      className={`
        lexend uppercase
        w-full py-3
        ${themeTextColor} text-center
        ${showBorder}
      `}
    >
      <h3 className={`${size}`}>{children}</h3>
    </section>
  );
};

export default Title;
