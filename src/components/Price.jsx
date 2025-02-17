import { COLD, generatedThemeStyles, HOT } from "../utils/constants";
import useLanguaje from "../hooks/useLanguaje";
import useTheme from "../hooks/useTheme";

const Price = ({ value, cold, noLabel = false }) => {
  const [languaje] = useLanguaje();
  const [theme] = useTheme();

  const { themeTextColor, themeTextSecudaryColor } =
    generatedThemeStyles(theme);

  const label = !cold ? HOT[languaje] : COLD[languaje];
  const color = !cold ? themeTextColor : themeTextSecudaryColor;

  return (
    <section
      className={`
        lexend
        flex flex-col items-center
        font-bold
        min-w-[90px] max-w-[100px]
        ${color}
      `}
    >
      {!noLabel && <p className="text-sm capitalize">{label}</p>}
      <p className="text-lg">$ {value}</p>
    </section>
  );
};

export default Price;
