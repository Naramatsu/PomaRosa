import { useContext } from "react";
import { PreferencesContext } from "../context";
import PriceLabel from "./PriceLabel";
import {
  BIG,
  descriptionStyles,
  generatedThemeStyles,
  MEDIUM,
} from "../utils/constants";
import useTheme from "../hooks/useTheme";
import useLanguaje from "../hooks/useLanguaje";

const PizzaItem = ({
  img,
  name,
  description,
  personal,
  familiar,
  big,
  medium,
}) => {
  const [theme] = useTheme();
  const [languaje] = useLanguaje();
  const { selectImage } = useContext(PreferencesContext);

  const {
    themeBorderColor,
    themeTextAlternativeColor,
    themeBorderAlternativeColor,
  } = generatedThemeStyles(theme);

  const { descriptionImageStyles, noDescriptionMargin, noDescriptionStyles } =
    descriptionStyles(description, img);

  return (
    <section
      className={`relative flex flex-col w-full min-w-[300px] ${noDescriptionStyles}`}
    >
      <section className="relative w-full h-auto flex gap-4 justify-between">
        {img && (
          <img
            src={img}
            alt="item"
            onClick={() => selectImage(img)}
            className={`
              min-w-[100px] max-w-[100px] min-h-[100px] max-h-[100px] object-cover
              rounded-md border-2 ${themeBorderAlternativeColor}
              hover:cursor-pointer
            `}
          />
        )}
        <section className="w-full flex flex-col gap-3">
          <p
            className={`
              kalam-regular first-letter:capitalize
              relative w-full overflow-hidden
              text-2xl ${themeTextAlternativeColor} font-semibold
            `}
          >
            {name?.toLowerCase()}
          </p>
          {description && (
            <p className={descriptionImageStyles}>
              {description?.toLowerCase()}
            </p>
          )}
        </section>
      </section>
      <section className={`flex gap-4 ${noDescriptionMargin}`}>
        <span
          className={`relative w-full border-b-2 border-dashed ${themeBorderColor} mb-[7px]`}
        />
        {personal && <PriceLabel value={personal} label="Personal" />}
        {familiar && <PriceLabel value={familiar} label="Familiar" cold />}
        {medium && <PriceLabel value={medium} label={MEDIUM[languaje]} />}
        {big && <PriceLabel value={big} label={BIG[languaje]} cold />}
      </section>
    </section>
  );
};

export default PizzaItem;
