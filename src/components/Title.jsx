import useTheme from "../hooks/useTheme";

const Title = ({ children, subTitle, menuTitle }) => {
  const { themeTitleTextColor, themeBorderColor, themeTextColor } = useTheme();
  const size = subTitle || menuTitle ? "text-2xl" : "text-3xl uppercase";
  const showBorder =
    subTitle || menuTitle ? "" : `border-b-2 border-dashed ${themeBorderColor}`;
  const textColor = subTitle ? themeTextColor : themeTitleTextColor;

  return (
    <section
      className={`
        lexend uppercase
        w-full py-3
        ${textColor} text-center
        ${showBorder}
      `}
    >
      <h3 className={`${size}`}>{children}</h3>
    </section>
  );
};

export default Title;
