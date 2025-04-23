import { memo } from "react";
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
  WHOLE_WHEAT_BREAD_SUBTITLE,
  wholeWheatBreadProductList,
} from "../data/bakery/individualBakery";
import useLanguaje from "../hooks/useLanguaje";
import useProduct from "../hooks/useProduct";
import { INDIVIDUAL_BAKERY_TITLE } from "../utils/constants";

const IndividualBakery = () => {
  const [languaje] = useLanguaje();

  const countryDoughProducts = useProduct(countryDoughProductList);
  const baguetteProducts = useProduct(baguetteProductList);
  const semisweetDoughProducts = useProduct(semisweetDoughProductList);
  const wholeWheatBreadProducts = useProduct(wholeWheatBreadProductList);

  return (
    <section id={INDIVIDUAL_BAKERY_TITLE[languaje]} className="w-full p-5">
      <Title>{INDIVIDUAL_BAKERY_TITLE[languaje]}</Title>

      <Box
        bordered
        title={COUNTRY_DOUGH_SUBTITLE[languaje]}
        className="flex-col gap-10 p-2 mt-10 mb-10"
      >
        {countryDoughProducts.map(({ name, medium, big, img }, index) => (
          <PizzaItem
            key={index}
            name={name[languaje]}
            medium={medium}
            big={big}
            img={img}
          />
        ))}
      </Box>

      <Box className="gap-10 flex-col py-10">
        <Title subTitle>{BAGUETTE_SUBTITLE[languaje]}</Title>
        {baguetteProducts.map(({ name, medium, big, img }, index) => (
          <PizzaItem
            key={index}
            name={name[languaje]}
            medium={medium}
            big={big}
            img={img}
          />
        ))}
      </Box>

      <Box className="gap-10 flex-col py-10">
        <Title subTitle>{SEMISWEET_DOUGH_SUBTITLE[languaje]}</Title>
        {semisweetDoughProducts.map(
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

      <Box
        bordered
        title={WHOLE_WHEAT_BREAD_SUBTITLE[languaje]}
        className="flex-col gap-10 p-2 mt-10 mb-10"
      >
        {wholeWheatBreadProducts.map(({ name, medium, big, img }, index) => (
          <PizzaItem
            key={index}
            name={name[languaje]}
            medium={medium}
            big={big}
            img={img}
          />
        ))}
      </Box>
    </section>
  );
};

export default memo(IndividualBakery);
