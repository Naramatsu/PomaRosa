import Box from "../components/Box";
import Product from "../components/Product";
import TextWarning from "../components/TextWarning";
import Title from "../components/Title";
import {
  comboBreakfastsProducts,
  COMBOS_BREAKFASTS,
  comboWarning,
} from "../data/comboBreakfasts";

const ComboBreakfasts = ({ languaje }) => {
  return (
    <section id="combo-breakfasts" className="w-full p-5">
      <Title>{COMBOS_BREAKFASTS[languaje]}</Title>
      <Box className="gap-5 flex-col py-10">
        {comboBreakfastsProducts.map(
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
      <TextWarning>{comboWarning[languaje]}</TextWarning>
    </section>
  );
};

export default ComboBreakfasts;
