import { useContext } from "react";
import { PreferencesContext } from "../context";
import Price from "./Price";
import { descriptionStyles } from "../utils/constants";
import useTheme from "../hooks/useTheme";

const Product = ({
  img,
  name,
  description,
  hotPrice,
  coldPrice,
  noLabel,
  centered = false,
  options = [],
}) => {
  const {
    themeBorderColor,
    themeTextAlternativeColor,
    themeBorderAlternativeColor,
  } = useTheme();

  const { selectImage } = useContext(PreferencesContext);
  const {
    descriptionImageStyles,
    noDescriptionMargin,
    noDescriptionStyles,
    optionalDescriptionStyles,
  } = descriptionStyles(description, img);

  const isCentered = centered ? "text-center" : "";
  const showOptions = !!options?.length;

  return (
    <section
      className={`relative flex flex-col w-full min-w-[300px] ${isCentered} ${noDescriptionStyles}`}
    >
      <section className="relative w-full h-auto flex gap-4 justify-between">
        {img && (
          <img
            src={img}
            alt="item"
            loading="lazy"
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
          {showOptions &&
            options.map((option, index) => (
              <p key={index} className={optionalDescriptionStyles}>
                <span className="font-bold text-brown">{option.name}: </span>
                {option.description?.toLowerCase()}
              </p>
            ))}
        </section>
      </section>
      <section className={`flex gap-4 ${noDescriptionMargin}`}>
        <span
          className={`relative w-full border-b-2 border-dashed ${themeBorderColor} mb-[7px]`}
        />
        {hotPrice && <Price value={hotPrice} noLabel={noLabel} />}
        {coldPrice && <Price value={coldPrice} cold noLabel={noLabel} />}
      </section>
    </section>
  );
};

export default Product;
