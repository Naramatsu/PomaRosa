const Button = ({
  children,
  type = "",
  isActive = false,
  onClick,
  className = "",
}) => {
  const chipStyles =
    type === "chip"
      ? "py-3 px-6 rounded-2xl text-sm"
      : "py-6 w-[312px] text-xl";

  const isActiveStyles = isActive ? "bg-beige text-black" : "";
  const handlerClick = onClick ? onClick : () => {};

  return (
    <button
      onClick={handlerClick}
      className={`
        text-beige border-2 border-beige
        font-semibold
        duration-200 ease-in-out
        hover:bg-beige hover:text-black
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
