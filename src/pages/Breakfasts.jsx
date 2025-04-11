import { memo } from "react";
import Box from "../components/Box";
import Product from "../components/Product";
import Title from "../components/Title";
import {
  ACCOMPANIMENTS,
  accompanimentsProducts,
  ADDITIONAL_EGGS_LIST,
  additionalEggsProducts,
  EGGS_TO_TASTE,
  EGGS_TO_TASTE_SUBTITLE,
  eggsToTasteProducts,
  HEALTHY,
  healthyProducts,
  SPECIAL_EGGS,
  SPECIAL_EGGS_SUBTITLE,
  specialEggsProducts,
} from "../data/kitchen/breakfasts";
import useLanguaje from "../hooks/useLanguaje";
import { BREAKFASTS_TITLE } from "../utils/constants";
import useProduct from "../hooks/useProduct";

const Breakfasts = () => {
  const [languaje] = useLanguaje();

  const eggsToTaste = useProduct(eggsToTasteProducts);
  const accompaniments = useProduct(accompanimentsProducts);
  const specialEggs = useProduct(specialEggsProducts);
  const healthy = useProduct(healthyProducts);
  const additionalEggs = useProduct(additionalEggsProducts);

  return (
    <section id="breakfasts" className="w-full p-5">
      <Title>{BREAKFASTS_TITLE[languaje]}</Title>
      <section className="py-10">
        <Title subTitle>
          {EGGS_TO_TASTE[languaje]}
          <p className="text-[1rem] text-brown/70">
            {EGGS_TO_TASTE_SUBTITLE[languaje]}
          </p>
        </Title>
        <Box className="gap-5 flex-col py-2">
          {eggsToTaste.map(({ name, hotPrice, img }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              hotPrice={hotPrice}
              img={img}
              noLabel
            />
          ))}
          <Box className="gap-5 flex-col p-2 mt-5 " bordered>
            <p className="text-dark-brown/70 text-xl kalam-regular text-center">
              {ADDITIONAL_EGGS_LIST[languaje]}
            </p>
            {additionalEggs.map(({ name, hotPrice, img }, index) => (
              <Product
                key={index}
                name={name[languaje]}
                hotPrice={hotPrice}
                img={img}
                noLabel
              />
            ))}
          </Box>
        </Box>
        <section className="pt-10">
          <Title subTitle>{ACCOMPANIMENTS[languaje]}</Title>
          <Box className="gap-5 flex-col">
            {accompaniments.map(({ name, hotPrice, img }, index) => (
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
          {specialEggs.map(({ name, hotPrice, description, img }, index) => (
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
          {healthy.map(({ name, coldPrice, description, img }, index) => (
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

export default memo(Breakfasts);
