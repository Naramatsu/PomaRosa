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
} from "../data/kitchen/waffles";
import useLanguaje from "../hooks/useLanguaje";

const Waffles = () => {
  const [languaje] = useLanguaje();

  return (
    <section id="waffles" className="w-full p-5">
      <Title>waffles</Title>
      <section className="py-10">
        <Title subTitle>{SAVORY_WAFFLES[languaje]}</Title>

        <Box className="gap-5 flex-col py-10">
          {savoryWafflesProducts
            .filter((product) => product.available)
            .map(({ name, hotPrice, description, img }, index) => (
              <Product
                key={index}
                name={name[languaje]}
                hotPrice={hotPrice}
                noLabel
                img={img}
                description={description[languaje]}
              />
            ))}
        </Box>
      </section>
      <Box
        bordered
        title={SWEET_WAFFLES[languaje]}
        className="flex-col gap-5 p-2 my-10"
      >
        {sweetWafflesProducts
          .filter((product) => product.available)
          .map(({ name, coldPrice, description, img }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              coldPrice={coldPrice}
              noLabel
              img={img}
              description={description[languaje]}
            />
          ))}
        <TextWarning>{WAFFLE_WARNING[languaje]}</TextWarning>
      </Box>
    </section>
  );
};

export default Waffles;
