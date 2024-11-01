import Box from "../components/Box";
import Product from "../components/Product";
import Title from "../components/Title";
import {
  ACCOMPANIMENTS,
  accompanimentsProducts,
  BREAKFASTS,
  EGGS_TO_TASTE,
  eggsToTasteProducts,
  HEALTHY,
  healthyProducts,
  SPECIAL_EGGS,
  SPECIAL_EGGS_SUBTITLE,
  specialEggsProducts,
} from "../data/breakfasts";
import useLanguaje from "../hooks/useLanguaje";

const Breakfasts = () => {
  const [languaje] = useLanguaje();

  return (
    <section id="breakfasts" className="w-full p-5">
      <Title>{BREAKFASTS[languaje]}</Title>
      <section className="py-10">
        <Title subTitle>{EGGS_TO_TASTE[languaje]}</Title>
        <Box className="gap-5 flex-col">
          {eggsToTasteProducts.map(({ name, hotPrice }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              hotPrice={hotPrice}
              noLabel
            />
          ))}
        </Box>
        <Title subTitle>{ACCOMPANIMENTS[languaje]}</Title>
        <Box className="gap-5 flex-col">
          {accompanimentsProducts.map(({ name, hotPrice }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              hotPrice={hotPrice}
              noLabel
            />
          ))}
        </Box>
      </section>
      <section className="py-10">
        <Title subTitle>
          {SPECIAL_EGGS[languaje]}
          <p>{SPECIAL_EGGS_SUBTITLE[languaje]}</p>
        </Title>
        <Box className="gap-5 flex-col">
          {specialEggsProducts.map(({ name, hotPrice, description }, index) => (
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
      <section className="py-10">
        <Title subTitle>{HEALTHY[languaje]}</Title>
        <Box className="gap-5 flex-col">
          {healthyProducts.map(({ name, coldPrice, description }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              coldPrice={coldPrice}
              noLabel
              description={description[languaje]}
            />
          ))}
        </Box>
      </section>
    </section>
  );
};

export default Breakfasts;
