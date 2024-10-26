import PriceLabel from "./PriceLabel";

const PizzaItem = ({ img, name, description, personal, familiar, noLabel }) => {
  const noDescriptionStyles = !description ? "gap-0" : "gap-3";
  const noDescriptionMargin = !description ? "-mt-0" : "";
  return (
    <section
      className={`relative flex flex-col w-full min-w-[300px] ${noDescriptionStyles}`}
    >
      <section className="relative w-full h-auto flex gap-4 justify-between">
        {img && (
          <img
            src={img}
            alt="item"
            className="
              w-[70px] h-[70px] object-cover
              rounded-full border-4 border-white
            "
          />
        )}
        <section className="w-full flex flex-col gap-3">
          <p
            className="
              kalam-regular uppercase
              relative w-full overflow-hidden
              text-xl text-white font-semibold math-auto
            "
          >
            {name}
            <span
              className="
                absolute bottom-0
                border-b-2 border-dashed border-beige
                mb-[7px] w-full ml-2"
            />
          </p>
          {description && (
            // <p className="text-sm text-white/70 great-vibes-regular">
            <p className="text-sm text-white/70 dancing-script">
              {description}
            </p>
          )}
        </section>
      </section>
      <section className={`flex gap-4 ${noDescriptionMargin}`}>
        <span className="relative w-full border-b-2 border-dashed border-beige mb-[7px]" />
        <PriceLabel value={personal} label="Personal" />
        <PriceLabel value={familiar} label="Familiar" cold />
      </section>
    </section>
  );
};

export default PizzaItem;
