import { memo } from "react";
import Box from "../components/Box";
import Product from "../components/Product";
import TextWarning from "../components/TextWarning";
import Title from "../components/Title";
import {
  SANDWICH,
  sandwichProducts,
  sandwichWarning,
} from "../data/kitchen/sandwich";
import useLanguaje from "../hooks/useLanguaje";
import useProduct from "../hooks/useProduct";

const Sandwich = () => {
  const [languaje] = useLanguaje();

  const sandwichs = useProduct(sandwichProducts);

  return (
    <section id="sandwich" className="w-full p-5">
      <Title>{SANDWICH}</Title>
      <Box className="gap-5 flex-col py-10">
        {sandwichs.map(({ name, hotPrice, description, img }, index) => (
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
      <TextWarning>{sandwichWarning[languaje]}</TextWarning>
    </section>
  );
};

export default memo(Sandwich);
