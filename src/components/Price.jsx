import { COLD, HOT } from "../utils/constants";
import useLanguaje from "../hooks/useLanguaje";
import useTheme from "../hooks/useTheme";

const Price = ({ value, cold, noLabel = false }) => {
  const [languaje] = useLanguaje();
  const { themeTextColor, themeTextAlternativeColor } = useTheme();

  const label = !cold ? HOT[languaje] : COLD[languaje];

  return (
    <section
      className="
        lexend
        flex flex-col items-center
        font-bold
        min-w-[90px] max-w-[100px]
      "
    >
      {!noLabel && (
        <p className={`text-sm capitalize ${themeTextColor}`}>{label}</p>
      )}
      <p className={`text-lg italic font-bold ${themeTextAlternativeColor}`}>
        $ {value}
      </p>
    </section>
  );
};

export default Price;
