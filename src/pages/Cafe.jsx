import Box from "../components/Box";
import Price from "../components/Price";
import Product from "../components/Product";
import Title from "../components/Title";
import {
  ADDITIONAL_MILK,
  almondMilkAdditionalPrices,
  cafeProductList,
  CAFE_TILTE,
  TO_ACCOMPANY,
  accompanyProductList,
} from "../data/cafe";

const Cafe = ({ languaje }) => {
  return (
    <section id="cafe" className="w-full p-5">
      <Title>{CAFE_TILTE[languaje]}</Title>
      <Box className="gap-5 flex-col py-10">
        {cafeProductList.map(({ name, hotPrice, coldPrice }, index) => (
          <Product
            key={index}
            name={name[languaje]}
            hotPrice={hotPrice}
            coldPrice={coldPrice}
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
          {accompanyProductList.map(({ name, hotPrice }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              hotPrice={hotPrice}
              noLabel
            />
          ))}
        </Box>
      </section>
    </section>
  );
};

export default Cafe;
