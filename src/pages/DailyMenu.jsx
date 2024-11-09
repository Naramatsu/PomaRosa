import Box from "../components/Box";
import Product from "../components/Product";
import Title from "../components/Title";
import { daymeuProductList } from "../data/daymenu";
import useLanguaje from "../hooks/useLanguaje";
import { DAILYMENU_TITLE } from "../utils/constants";

const DailyMenu = () => {
  const [languaje] = useLanguaje();

  return (
    <section id="dailymenu" className="w-full p-5">
      <Title>{DAILYMENU_TITLE[languaje]}</Title>
      <p
        className="
          font-bold kalam-regular text-white text-xl
          text-center mt-10 mb-5 p-4
          border-2 border-green
          bg-green/70 text-shadow
          rounded-sm
        "
      >
        Todos los días de 12:00 a 3:00 pm
      </p>
      <Title subTitle>$25.000 con bebida + postre</Title>
      <Box className="gap-5 flex-col py-10">
        {daymeuProductList.map(({ name, hotPrice, description }, index) => (
          <Product
            key={index}
            name={name[languaje]}
            hotPrice={hotPrice}
            noLabel
            description={description[languaje]}
          />
        ))}
      </Box>
    </section>
  );
};

export default DailyMenu;
