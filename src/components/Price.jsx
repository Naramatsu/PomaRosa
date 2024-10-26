const Price = ({ value, cold, noLabel = false }) => {
  const label = !cold ? "Caliente" : "Frio";
  const color = !cold ? "text-beige" : "text-green";
  return (
    <section
      className={`
        lexend
        flex flex-col items-center
        font-bold
        min-w-[85px] max-w-[90px]
        ${color}
      `}
    >
      {!noLabel && <p className="text-sm capitalize">{label}</p>}
      <p className="text-lg">$ {value}</p>
    </section>
  );
};

export default Price;
