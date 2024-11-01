import Box from "../components/Box";
import Product from "../components/Product";
import TextWarning from "../components/TextWarning";
import Title from "../components/Title";
import { SANDWICH, sandwichProducts, sandwichWarning } from "../data/sandwich";
import useLanguaje from "../hooks/useLanguaje";

const img = "https://images7.alphacoders.com/349/thumb-1920-349766.jpg";

const Sandwich = () => {
  const [languaje] = useLanguaje();

  return (
    <section id="sandwich" className="w-full p-5">
      <Title>{SANDWICH}</Title>
      <Box className="gap-5 flex-col py-10">
        {sandwichProducts.map(({ name, hotPrice, description }, index) => (
          <Product
            key={index}
            img={img}
            name={name[languaje]}
            hotPrice={hotPrice}
            noLabel
            description={description[languaje]}
          />
        ))}
      </Box>
      <TextWarning>{sandwichWarning[languaje]}</TextWarning>
    </section>
  );
};

export default Sandwich;
