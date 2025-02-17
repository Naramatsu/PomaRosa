import Box from "../components/Box";
import Product from "../components/Product";
import TextWarning from "../components/TextWarning";
import Title from "../components/Title";
import useLanguaje from "../hooks/useLanguaje";
import {
  comboBreakfastsProducts,
  comboWarning,
} from "../data/kitchen/comboBreakfasts";
import { COMBOS_BREAKFASTS_TITLE } from "../utils/constants";

const ComboBreakfasts = () => {
  const [languaje] = useLanguaje();

  return (
    <section id="combo-breakfasts" className="w-full p-5">
      <Title>{COMBOS_BREAKFASTS_TITLE[languaje]}</Title>
      <Box className="gap-5 flex-col py-10">
        {comboBreakfastsProducts.map(
          ({ name, hotPrice, description, img }, index) => (
            <Product
              key={index}
              name={name[languaje]}
              hotPrice={hotPrice}
              noLabel
              img={img}
              description={description[languaje]}
            />
          )
        )}
      </Box>
      <TextWarning>{comboWarning[languaje]}</TextWarning>
    </section>
  );
};

export default ComboBreakfasts;
