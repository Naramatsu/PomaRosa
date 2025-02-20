import useTheme from "../hooks/useTheme";

const Button = ({
  children,
  type = "",
  isActive = false,
  onClick,
  className = "",
}) => {
  const { themeTextColor, themeBorderColor, themeActive, themeHover } =
    useTheme();
  const chipStyles =
    type === "chip"
      ? "py-3 px-6 rounded-2xl text-sm"
      : "py-6 w-[312px] text-xl";

  const isActiveStyles = isActive ? themeActive : "";
  const handlerClick = onClick ? onClick : () => {};

  return (
    <button
      onClick={handlerClick}
      className={`
        ${themeTextColor} border-2 ${themeBorderColor}
        font-semibold
        duration-200 ease-in-out
        ${themeHover}
        ${chipStyles}
        ${isActiveStyles}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
