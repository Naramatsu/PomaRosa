import Box from "../components/Box";
import Product from "../components/Product";
import Title from "../components/Title";
import {
  SAVORY_WAFFLES,
  savoryWafflesProducts,
  SWEET_WAFFLES,
  sweetWafflesProducts,
} from "../data/waffles";
import useLanguaje from "../hooks/useLanguaje";

const Waffles = () => {
  const [languaje] = useLanguaje();

  return (
    <section id="waffles" className="w-full p-5">
      <Title>{SAVORY_WAFFLES[languaje]}</Title>
      <Box className="gap-5 flex-col py-10">
        {savoryWafflesProducts.map(({ name, hotPrice, description }, index) => (
          <Product
            key={index}
            name={name[languaje]}
            hotPrice={hotPrice}
            noLabel
            description={description[languaje]}
          />
        ))}
      </Box>
      <section className="py-10">
        <Title>{SWEET_WAFFLES[languaje]}</Title>
        <Box className="gap-5 flex-col py-10">
          {sweetWafflesProducts.map(
            ({ name, coldPrice, description }, index) => (
              <Product
                key={index}
                name={name[languaje]}
                coldPrice={coldPrice}
                noLabel
                description={description[languaje]}
              />
            )
          )}
        </Box>
      </section>
    </section>
  );
};

export default Waffles;
