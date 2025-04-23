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
  TEA_E_INFUSIONS,
  teaAndInfusionsProductList,
} from "../data/kitchen/cafe";
import useLanguaje from "../hooks/useLanguaje";
import useProduct from "../hooks/useProduct";
import { CAFE_TILTE } from "../utils/constants";

const Cafe = () => {
  const [languaje] = useLanguaje();

  const cafeProducts = useProduct(cafeProductList);
  const accompanyProducts = useProduct(accompanyProductList);
  const teaAndInfusionProducts = useProduct(teaAndInfusionsProductList);

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
        <section className="w-full py-5">
          <Title subTitle>{TEA_E_INFUSIONS[languaje]}</Title>
          <Box className="gap-5 flex-col pt-10">
            {teaAndInfusionProducts.map(
              ({ name, hotPrice, img, coldPrice }, index) => (
                <Product
                  key={index}
                  name={name[languaje]}
                  hotPrice={hotPrice}
                  coldPrice={coldPrice}
                  img={img}
                />
              )
            )}
          </Box>
        </section>
        <Box className="gap-2 p-2 flex-col sm:flex-row" bordered>
          <p className="text-dark-brown/70 text-lg kalam-regular w-full text-center">
            {ADDITIONAL_MILK[languaje]}
          </p>
          <Box className="flex gap-2">
            {almondMilkAdditionalPrices.map(({ value, cold }, index) => (
              <Price key={index} value={value} cold={cold} />
            ))}
          </Box>
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
