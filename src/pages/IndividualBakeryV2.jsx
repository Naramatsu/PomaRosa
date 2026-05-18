import { memo } from "react";
import Box from "../components/Box";
import Product from "../components/Product";
import Title from "../components/Title";
import useLanguaje from "../hooks/useLanguaje";
import useProduct from "../hooks/useProduct";
import { INDIVIDUAL_BAKERY_TITLE } from "../utils/constants";
import {
  CHEESECAKES_SUBTITLE,
  cheesecakesProductList,
  CUSTARDS_SUBTITLE,
  INDIVIDUAL_SUBTITLE,
  individualProductList,
  PIES_SUBTITLE,
  piesProductList,
  quesillosProductList,
} from "../data/bakery/individual";

const IndividualBakeryV2 = () => {
  const [languaje] = useLanguaje();

  const individualProducts = useProduct(individualProductList);
  const cheesecakeProducts = useProduct(cheesecakesProductList);
  const custardProducts = useProduct(quesillosProductList);
  const piesProducts = useProduct(piesProductList);

  return (
    <section id={INDIVIDUAL_BAKERY_TITLE[languaje]} className="w-full p-5">
      <Title>{INDIVIDUAL_SUBTITLE[languaje]}</Title>

      <Box className="flex-col gap-10 p-2 my-10">
        {individualProducts.map(
          ({ name, hotPrice, img, noLabel = true }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              hotPrice={hotPrice}
              noLabel={noLabel}
              img={img}
            />
          ),
        )}
      </Box>

      <Box
        bordered
        title={CHEESECAKES_SUBTITLE[languaje]}
        className="gap-10 flex-col py-10 my-10"
      >
        {cheesecakeProducts.map(
          ({ name, coldPrice, img, noLabel = true }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              coldPrice={coldPrice}
              noLabel={noLabel}
              img={img}
            />
          ),
        )}
      </Box>

      <Box
        bordered
        title={CUSTARDS_SUBTITLE[languaje]}
        className="gap-10 flex-col py-10 mt-10"
      >
        {custardProducts.map(
          ({ name, coldPrice, img, noLabel = true }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              coldPrice={coldPrice}
              noLabel={noLabel}
              img={img}
            />
          ),
        )}
      </Box>

      <Box
        bordered
        title={PIES_SUBTITLE[languaje]}
        className="flex-col gap-10 p-2 mt-10 mb-10"
      >
        {piesProducts.map(({ name, coldPrice, img, noLabel = true }, index) => (
          <Product
            key={index}
            name={name[languaje]}
            coldPrice={coldPrice}
            noLabel={noLabel}
            img={img}
          />
        ))}
      </Box>
    </section>
  );
};

export default memo(IndividualBakeryV2);
