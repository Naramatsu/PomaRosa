import { memo } from "react";
import Box from "../components/Box";
import Price from "../components/Price";
import Product from "../components/Product";
import Title from "../components/Title";
import {
  ADDITIONAL_MILK,
  almondMilkAdditionalPrices,
  cafeProductList,
  TO_ACCOMPANY,
  accompanyProductList,
} from "../data/kitchen/cafe";
import useLanguaje from "../hooks/useLanguaje";
import useProduct from "../hooks/useProduct";
import { CAFE_TILTE } from "../utils/constants";

const Cafe = () => {
  const [languaje] = useLanguaje();

  const cafeProducts = useProduct(cafeProductList);
  const accompanyProducts = useProduct(accompanyProductList);

  return (
    <section id={CAFE_TILTE[languaje]} className="w-full p-5">
      <Title>{CAFE_TILTE[languaje]}</Title>
      <Box className="gap-5 flex-col py-10">
        {cafeProducts.map(({ name, hotPrice, coldPrice, img }, index) => (
          <Product
            key={index}
            name={name[languaje]}
            hotPrice={hotPrice}
            coldPrice={coldPrice}
            img={img}
          />
        ))}
        <Box className="gap-2 mt-4">
          <p className="text-dark-brown/70 text-lg kalam-regular">
            {ADDITIONAL_MILK[languaje]}
          </p>
          {almondMilkAdditionalPrices.map(({ value, cold }, index) => (
            <Price key={index} value={value} cold={cold} />
          ))}
        </Box>
      </Box>
      <section className="w-full py-5">
        <Title>{TO_ACCOMPANY[languaje]}</Title>
        <Box className="gap-5 flex-col py-10">
          {accompanyProducts.map(({ name, hotPrice, img }, index) => (
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
  );
};

export default memo(Cafe);
