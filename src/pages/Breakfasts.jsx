import Box from "../components/Box";
import Product from "../components/Product";
import Title from "../components/Title";
import {
  ACCOMPANIMENTS,
  accompanimentsProducts,
  EGGS_TO_TASTE,
  eggsToTasteProducts,
  HEALTHY,
  healthyProducts,
  SPECIAL_EGGS,
  SPECIAL_EGGS_SUBTITLE,
  specialEggsProducts,
} from "../data/kitchen/breakfasts";
import useLanguaje from "../hooks/useLanguaje";
import { BREAKFASTS_TITLE } from "../utils/constants";

const Breakfasts = () => {
  const [languaje] = useLanguaje();

  return (
    <section id="breakfasts" className="w-full p-5">
      <Title>{BREAKFASTS_TITLE[languaje]}</Title>
      <section className="py-10">
        <Title subTitle>{EGGS_TO_TASTE[languaje]}</Title>
        <Box className="gap-5 flex-col py-2">
          {eggsToTasteProducts
            .filter((product) => product.available)
            .map(({ name, hotPrice, img }, index) => (
              <Product
                key={index}
                name={name[languaje]}
                hotPrice={hotPrice}
                img={img}
                noLabel
              />
            ))}
        </Box>
        <section className="pt-10">
          <Title subTitle>{ACCOMPANIMENTS[languaje]}</Title>
          <Box className="gap-5 flex-col">
            {accompanimentsProducts
              .filter((product) => product.available)
              .map(({ name, hotPrice, img }, index) => (
                <Product
                  key={index}
                  name={name[languaje]}
                  hotPrice={hotPrice}
                  img={img}
                  noLabel
                />
              ))}
          </Box>
        </section>
      </section>
      <section className="py-10">
        <Title subTitle>
          {SPECIAL_EGGS[languaje]}
          <p className="text-[1rem] text-brown/70">
            {SPECIAL_EGGS_SUBTITLE[languaje]}
          </p>
        </Title>
        <Box className="gap-5 flex-col py-2">
          {specialEggsProducts
            .filter((product) => product.available)
            .map(({ name, hotPrice, description, img }, index) => (
              <Product
                key={index}
                name={name[languaje]}
                hotPrice={hotPrice}
                noLabel
                img={img}
                description={description[languaje]}
              />
            ))}
        </Box>
      </section>
      <section className="py-10">
        <Title subTitle>{HEALTHY[languaje]}</Title>
        <Box className="gap-5 flex-col py-2">
          {healthyProducts
            .filter((product) => product.available)
            .map(({ name, coldPrice, description, img }, index) => (
              <Product
                key={index}
                name={name[languaje]}
                coldPrice={coldPrice}
                noLabel
                img={img}
                description={description[languaje]}
              />
            ))}
        </Box>
      </section>
    </section>
  );
};

export default Breakfasts;
