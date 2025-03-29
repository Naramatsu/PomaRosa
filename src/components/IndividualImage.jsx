import { useContext } from "react";
import { PreferencesContext } from "../context";
import useTheme from "../hooks/useTheme";

const IndividualImage = ({ img }) => {
  const { selectImage } = useContext(PreferencesContext);
  const { themeBorderAlternativeColor } = useTheme();

  return (
    <img
      src={img}
      alt="Item"
      loading="lazy"
      onClick={() => selectImage(img)}
      className={`
        min-w-[100px] max-w-[100px] min-h-[100px] max-h-[100px] object-cover
        rounded-md border-2 ${themeBorderAlternativeColor}
        hover:cursor-pointer
      `}
    />
  );
};

export default IndividualImage;
