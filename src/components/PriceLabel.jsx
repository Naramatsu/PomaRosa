const PriceLabel = ({ value, label, cold }) => {
  const color = !cold ? "text-beige" : "text-green";
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
      <p className="text-sm capitalize">{label}</p>
      <p className="text-lg">$ {value}</p>
    </section>
  );
};

export default PriceLabel;
