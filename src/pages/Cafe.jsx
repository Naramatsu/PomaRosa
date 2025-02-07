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
} from "../data/cafe";
import useLanguaje from "../hooks/useLanguaje";
import { CAFE_TILTE } from "../utils/constants";

const Cafe = () => {
  const [languaje] = useLanguaje();

  return (
    <section id={CAFE_TILTE[languaje]} className="w-full p-5">
      <Title>{CAFE_TILTE[languaje]}</Title>
      <Box className="gap-5 flex-col py-10">
        {cafeProductList.map(({ name, hotPrice, coldPrice, img }, index) => (
          <Product
            key={index}
            name={name[languaje]}
            hotPrice={hotPrice}
            coldPrice={coldPrice}
            img={img}
          />
        ))}
        <Box className="gap-2 mt-4">
          <p className="text-white/70 text-lg kalam-regular">
            {ADDITIONAL_MILK[languaje]}
          </p>
          {almondMilkAdditionalPrices.map(({ value, cold }, index) => (
            <Price key={index} value={value} cold={cold} />
          ))}
        </Box>
      </Box>
      <section className="w-full py-5">
        <Title subTitle>{TO_ACCOMPANY[languaje]}</Title>
        <Box className="gap-5 flex-col py-10">
          {accompanyProductList.map(({ name, hotPrice, img }, index) => (
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

export default Cafe;
