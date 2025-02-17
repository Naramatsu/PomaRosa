import Box from "../components/Box";
import PizzaItem from "../components/PizzaItem";
import Product from "../components/Product";
import Title from "../components/Title";
import {
  BAGUETTE_SUBTITLE,
  baguetteProductList,
  COUNTRY_DOUGH_SUBTITLE,
  countryDoughProductList,
  SEMISWEET_DOUGH_SUBTITLE,
  semisweetDoughProductList,
} from "../data/bakery/individualBakery";
import useLanguaje from "../hooks/useLanguaje";
import { INDIVIDUAL_BAKERY_TITLE } from "../utils/constants";

const IndividualBakery = () => {
  const [languaje] = useLanguaje();

  return (
    <section id={INDIVIDUAL_BAKERY_TITLE[languaje]} className="w-full p-5">
      <Title>{INDIVIDUAL_BAKERY_TITLE[languaje]}</Title>
      <Box className="gap-5 flex-col py-10">
        <Title subTitle>{COUNTRY_DOUGH_SUBTITLE[languaje]}</Title>
        {countryDoughProductList.map(({ name, medium, big, img }, index) => (
          <PizzaItem
            key={index}
            name={name[languaje]}
            medium={medium}
            big={big}
            img={img}
          />
        ))}
      </Box>

      <Box className="gap-5 flex-col py-10">
        <Title subTitle>{BAGUETTE_SUBTITLE[languaje]}</Title>
        {baguetteProductList.map(({ name, medium, big, img }, index) => (
          <PizzaItem
            key={index}
            name={name[languaje]}
            medium={medium}
            big={big}
            img={img}
          />
        ))}
      </Box>

      <Box className="gap-5 flex-col py-10">
        <Title subTitle>{SEMISWEET_DOUGH_SUBTITLE[languaje]}</Title>
        {semisweetDoughProductList.map(
          ({ name, hotPrice, img, noLabel = true }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              hotPrice={hotPrice}
              noLabel={noLabel}
              img={img}
            />
          )
        )}
      </Box>
    </section>
  );
};

export default IndividualBakery;
