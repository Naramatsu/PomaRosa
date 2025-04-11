import { memo } from "react";
import Box from "../components/Box";
import Product from "../components/Product";
import Title from "../components/Title";
import {
  COLD_DRINKS,
  disclaimer,
  JUICES,
  juicesList,
  juicesPrices,
  LEMONADE,
  lemonadeProductList,
  ORANGE_JUICE,
  orangeJuiceProductList,
  OTHER_DRINKS,
  otherDrinksProductList,
  SODAS,
  sodasProductList,
  SPECIAL_JUICES,
  specialJuicesList,
  specialJuicesPrices,
} from "../data/kitchen/drinks";
import useLanguaje from "../hooks/useLanguaje";
import useProduct from "../hooks/useProduct";
import IndividualImage from "../components/IndividualImage";
import TextWarning from "../components/TextWarning";

const Drinks = () => {
  const [languaje] = useLanguaje();

  const lemonades = useProduct(lemonadeProductList);
  const juicesPricesList = useProduct(juicesPrices);
  const orangeJuices = useProduct(orangeJuiceProductList);
  const otherDrinks = useProduct(otherDrinksProductList);
  const sodas = useProduct(sodasProductList);

  const orangeJuiceImg =
    "https://res.cloudinary.com/dwufyf99d/image/upload/v1743257902/Jugo_naranja_r5weoe.webp";

  return (
    <section id={COLD_DRINKS[languaje]} className="w-full p-5">
      <Title>{COLD_DRINKS[languaje]}</Title>
      <Box
        bordered
        title={LEMONADE[languaje]}
        className="flex-col gap-5 p-2 mt-10 mb-10"
      >
        <section className="w-full flex flex-col gap-5 justify-center items-center py-2">
          {lemonades.map(({ name, coldPrice, img }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              coldPrice={coldPrice}
              img={img}
              noLabel
            />
          ))}
        </section>
      </Box>
      <Box
        bordered
        title={JUICES[languaje]}
        className="flex-col gap-5 p-2 my-16"
      >
        <p className="text-dark-brown/70 text-xl text-center">
          {juicesList[languaje]}
        </p>
        {juicesPricesList.map(({ name, coldPrice, img }, index) => (
          <Product
            key={index}
            name={name[languaje]}
            coldPrice={coldPrice}
            img={img}
            noLabel
          />
        ))}
      </Box>
      <Box
        bordered
        title={SPECIAL_JUICES[languaje]}
        className="flex-col gap-5 p-2 my-16"
      >
        <p className="text-dark-brown/70 text-xl text-center">
          {specialJuicesList[languaje]}
        </p>
        {specialJuicesPrices.map(({ name, coldPrice, img }, index) => (
          <Product
            key={index}
            name={name[languaje]}
            coldPrice={coldPrice}
            img={img}
            noLabel
          />
        ))}
      </Box>

      <Box
        bordered
        title={ORANGE_JUICE[languaje]}
        className="flex-col gap-5 p-2 my-16"
      >
        <IndividualImage img={orangeJuiceImg} />
        <section className="w-full flex flex-col gap-5 justify-center items-center py-2">
          {orangeJuices.map(({ name, coldPrice, img }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              coldPrice={coldPrice}
              img={img}
              noLabel
            />
          ))}
        </section>
      </Box>

      <Box
        bordered
        title={OTHER_DRINKS[languaje]}
        className="flex-col gap-5 p-2 my-16"
      >
        <section className="w-full flex flex-col gap-5 justify-center items-center py-2">
          {otherDrinks.map(({ name, coldPrice, img }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              coldPrice={coldPrice}
              img={img}
              noLabel
            />
          ))}
        </section>
      </Box>

      <Box
        bordered
        title={SODAS[languaje]}
        className="flex-col gap-5 p-2 my-10"
      >
        <section className="w-full flex flex-col gap-5 justify-center items-center py-2">
          {sodas.map(({ name, description, coldPrice, img }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              coldPrice={coldPrice}
              description={description[languaje]}
              img={img}
              noLabel
            />
          ))}
        </section>
      </Box>
      <section className="p-5 max-w-[600px] m-auto mb-16">
        <TextWarning>{disclaimer[languaje]}</TextWarning>
      </section>
    </section>
  );
};

export default memo(Drinks);
