import Box from "../components/Box";
import PizzaItem from "../components/PizzaItem";
import Title from "../components/Title";
import { PIZZA, pizzaProducts } from "../data/pizzas";

const Pizzas = ({ languaje }) => {
  return (
    <section id="pizzas" className="w-full p-5">
      <Title>{PIZZA}</Title>
      <Box className="gap-5 flex-col py-10">
        {pizzaProducts.map(
          ({ name, personal, familiar, description }, index) => (
            <PizzaItem
              key={index}
              name={name[languaje]}
              personal={personal}
              familiar={familiar}
              description={description[languaje]}
            />
          )
        )}
      </Box>
    </section>
  );
};

export default Pizzas;