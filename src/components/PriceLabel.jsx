import useTheme from "../hooks/useTheme";

const PriceLabel = ({ value, label, subLabel }) => {
  const { themeTextColor, themeTextAlternativeColor } = useTheme();

  return (
    <section
      className={`
        lexend
        flex flex-col items-center
        font-bold
        min-w-[100px] max-w-[100px]
      `}
    >
      <p className={`text-md capitalize text-center ${themeTextColor}`}>
        {label}
      </p>
      <p className="text-brown/70 text-xs font-normal">{subLabel}</p>
      <p className={`text-lg italic font-bold ${themeTextAlternativeColor}`}>
        $ {value}
      </p>
    </section>
  );
};

export default PriceLabel;
