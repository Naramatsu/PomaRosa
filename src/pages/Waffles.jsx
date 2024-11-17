import Box from "../components/Box";
import Product from "../components/Product";
import TextWarning from "../components/TextWarning";
import Title from "../components/Title";
import {
  SAVORY_WAFFLES,
  savoryWafflesProducts,
  SWEET_WAFFLES,
  sweetWafflesProducts,
  WAFFLE_WARNING,
} from "../data/waffles";
import useLanguaje from "../hooks/useLanguaje";

const Waffles = () => {
  const [languaje] = useLanguaje();

  return (
    <section id="waffles" className="w-full p-5">
      <Title>waffles</Title>
      <section className="py-10">
        <Title subTitle>{SAVORY_WAFFLES[languaje]}</Title>

        <Box className="gap-5 flex-col py-10">
          {savoryWafflesProducts.map(
            ({ name, hotPrice, description }, index) => (
              <Product
                key={index}
                name={name[languaje]}
                hotPrice={hotPrice}
                noLabel
                description={description[languaje]}
              />
            )
          )}
        </Box>
      </section>
      <section className="py-10 border-2 border-white/50 border-dashed p-5">
        <Title subTitle>{SWEET_WAFFLES[languaje]}</Title>
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
        <TextWarning>{WAFFLE_WARNING[languaje]}</TextWarning>
      </section>
    </section>
  );
};

export default Waffles;
