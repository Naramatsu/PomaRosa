import { memo } from "react";
import Box from "../components/Box";
import Product from "../components/Product";
import Title from "../components/Title";
import { WAFFLES_TITLE, wafflesProducts } from "../data/kitchen/waffles";
import useLanguaje from "../hooks/useLanguaje";
import useProduct from "../hooks/useProduct";

const Waffles = () => {
  const [languaje] = useLanguaje();

  const waffles = useProduct(wafflesProducts);

  return (
    <section id="waffles" className="w-full p-5">
      <Title>waffles</Title>
      <section className="py-10">
        <Title subTitle>{WAFFLES_TITLE[languaje]}</Title>

        <Box
          bordered
          className="gap-5 flex-col py-10"
          //  className="flex-col gap-5 p-2 my-10"
        >
          {waffles.map(({ name, hotPrice, description, img }, index) => (
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
    </section>
  );
};

export default memo(Waffles);
