import useTheme from "../hooks/useTheme";
import { generatedThemeStyles } from "../utils/constants";

const PriceLabel = ({ value, label, cold }) => {
  const [theme] = useTheme();

  const { themeTextColor, themeTextSecudaryColor } =
    generatedThemeStyles(theme);

  const color = !cold ? themeTextColor : themeTextSecudaryColor;

  return (
    <section
      className={`
        lexend
        flex flex-col items-center
        font-bold
        min-w-[100px] max-w-[100px]
        ${color}
      `}
    >
      <p className="text-sm capitalize">{label}</p>
      <p className="text-lg">$ {value}</p>
    </section>
  );
};

export default PriceLabel;
