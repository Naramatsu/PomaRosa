import Banner from "../components/Banner";
import Box from "../components/Box";
import Product from "../components/Product";
import Title from "../components/Title";
import {
  daymenuHours,
  daymenuPrice,
  daymeuProductList,
} from "../data/kitchen/daymenu";
import useLanguaje from "../hooks/useLanguaje";
import { DAILYMENU_TITLE } from "../utils/constants";

const DailyMenu = () => {
  const [languaje] = useLanguaje();

  return (
    <section id="dailymenu" className="w-full p-5">
      <Title>{DAILYMENU_TITLE[languaje]}</Title>
      <section
        className="
          font-bold kalam-regular text-dark-brown/70 text-xl
          text-center mt-10 mb-5 p-4
          border-2 border-brown
          rounded-sm bg-dark-beige/50
        "
      >
        <p className="pt-3">{daymenuHours[languaje]}</p>
        <Title subTitle>{daymenuPrice[languaje]}</Title>
      </section>
      <Banner img="https://res.cloudinary.com/dwufyf99d/image/upload/v1738937793/menupastapomarosa_ocdmo6.jpg" />
      <Box className="gap-5 flex-col py-10">
        {daymeuProductList.map(({ name, hotPrice, description }, index) => (
          <Product
            key={index}
            name={name[languaje]}
            hotPrice={hotPrice}
            noLabel
            centered
            description={description[languaje]}
          />
        ))}
      </Box>
    </section>
  );
};

export default DailyMenu;
