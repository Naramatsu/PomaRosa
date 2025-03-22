import Box from "../components/Box";
import Product from "../components/Product";
import Title from "../components/Title";
import {
  COLD_DRINKS,
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
} from "../data/kitchen/drinks";
import useLanguaje from "../hooks/useLanguaje";

const Drinks = () => {
  const [languaje] = useLanguaje();

  return (
    <section id={COLD_DRINKS[languaje]} className="w-full p-5">
      <Title>{COLD_DRINKS[languaje]}</Title>
      <Box
        bordered
        title={LEMONADE[languaje]}
        className="flex-col gap-5 p-2 my-10"
      >
        <section className="w-full flex flex-col gap-5 justify-center items-center py-2">
          {lemonadeProductList
            .filter((product) => product.available)
            .map(({ name, coldPrice, img }, index) => (
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
        className="flex-col gap-5 p-2 my-10"
      >
        <p className="text-dark-brown/70 text-xl text-center">
          {juicesList[languaje]}
        </p>
        {juicesPrices
          .filter((product) => product.available)
          .map(({ name, coldPrice, img }, index) => (
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
        className="flex-col gap-5 p-2 my-10"
      >
        <section className="w-full flex flex-col gap-5 justify-center items-center py-2">
          {orangeJuiceProductList
            .filter((product) => product.available)
            .map(({ name, coldPrice, img }, index) => (
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
        className="flex-col gap-5 p-2 my-10"
      >
        <section className="w-full flex flex-col gap-5 justify-center items-center py-2">
          {otherDrinksProductList
            .filter((product) => product.available)
            .map(({ name, coldPrice, img }, index) => (
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
          {sodasProductList
            .filter((product) => product.available)
            .map(({ name, description, coldPrice, img }, index) => (
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
    </section>
  );
};

export default Drinks;
